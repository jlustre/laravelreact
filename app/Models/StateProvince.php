<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StateProvince extends Model
{
    protected $fillable = [
        'country_id',
        'name',
        'code',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function getNameAttribute($value)
    {
        return $value ?: $this->name;
    }

    public function getCodeAttribute($value)
    {
        return $value ?: $this->code;
    }
    public function getCountryIdAttribute($value)
    {
        return $value ?: $this->country_id;
    }
    public function getCountryNameAttribute($value)
    {
        return $this->country ? $this->country->name : null;
    }
    public function getCountryCodeAttribute($value)
    {
        return $this->country ? $this->country->code : null;
    }
}
