<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('code')->unique();
            $table->string('currency')->nullable();
            $table->string('currency_code')->nullable();
            $table->string('currency_symbol')->nullable();
            $table->string('phone_code')->nullable();
            $table->string('flag')->nullable();
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });
        // Insert default countries
        $countries = [
            ['name' => 'United States', 'code' => 'US', 'currency' => 'Dollar', 'currency_code' => 'USD', 'currency_symbol' => '$', 'phone_code' => '+1', 'flag' => '🇺🇸'],
            ['name' => 'Canada', 'code' => 'CA', 'currency' => 'Dollar', 'currency_code' => 'CAD', 'currency_symbol' => '$', 'phone_code' => '+1', 'flag' => '🇨🇦'],
        ];
        foreach ($countries as $country) {
            DB::table('countries')->insert([
                'name' => $country['name'],
                'code' => $country['code'],
                'currency' => $country['currency'],
                'currency_code' => $country['currency_code'],
                'currency_symbol' => $country['currency_symbol'],
                'phone_code' => $country['phone_code'],
                'flag' => $country['flag'],
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('countries');
    }
};
