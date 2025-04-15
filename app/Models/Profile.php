<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'user_id',
        'stateprovince_id',
        'timezone_id',
        'rank_id',
        'avatar',
        'bio',
        'is_online',
        'last_access',
        'last_ip',
    ];

    /**
     * Get the user that owns the profile.
     */
  public function user()
    {
        return $this->belongsTo(User::class);
    }
}
