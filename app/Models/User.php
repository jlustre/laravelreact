<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'sponsor',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected static function booted()
    {
        static::created(function (User $user) {
          //assign default values to the profile
            $user->profile()->create([
                'stateprovince_id' => null,
                'timezone_id' => null,
                'rank_id' => 1,
                'avatar' => 'default.png',
                'bio' => '',
                'is_online' => 0,
            ]);
        });
    }

    /**
     * The attributes that should be appended to the model's array form.
     *
     * @return list<string>
     */
    protected function appends(): array
    {
        return [
            'avatar',
            'is_online',
            'last_access',
            'last_ip',
        ];
    }
    /**
     * The attributes that should be hidden for serialization.
     *
     * @return list<string>
     */
    protected function hidden(): array
    {
        return [
            'password',
            'remember_token',
        ];
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function stateprovince()
    {
        return $this->hasOne(StateProvince::class);
    }

    public function timezone()
    {
        return $this->hasOne(TimeZone::class);
    }
    public function rank()
    {
        return $this->hasOne(Rank::class);
    }
}
