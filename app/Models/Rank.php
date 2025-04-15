<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{

    protected $fillable = [
        'name',
        'description',
        'level',
        'points_required',
        'created_at',
        'updated_at',
    ];

    /**
     * Get the users that belong to the rank.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
