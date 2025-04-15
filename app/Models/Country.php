<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\StateProvince;

class Country extends Model
{
    protected $fillable = [
        'name',
        'code',
        'currency',
        'currency_code',
        'currency_symbol',
        'phone_code',
        'flag',
        'is_active',
    ];

    public function stateProvinces()
    {
        return $this->hasMany(StateProvince::class);
    }
    public function getFlagAttribute($value)
    {
        return asset('storage/' . $value);
    }
    public function getCurrencySymbolAttribute($value)
    {
        return $value ?: $this->currency_code;
    }
    public function getPhoneCodeAttribute($value)
    {
        return $value ?: $this->phone_code;
    }
    public function getCurrencyCodeAttribute($value)
    {
        return $value ?: $this->currency_code;
    }
    public function getCurrencyAttribute($value)
    {
        return $value ?: $this->currency;
    }
    public function getNameAttribute($value)
    {
        return $value ?: $this->name;
    }
    public function getCodeAttribute($value)
    {
        return $value ?: $this->code;
    }
    public function getIsActiveAttribute($value)
    {
        return $value ?: $this->is_active;
    }
}
