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
        Schema::create('timezones', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('offset');
            $table->string('abbreviation')->unique();

            $table->timestamps();
        });
        // Insert default time zones
        $timeZones = [
            ['name' => 'Pacific Standard Time', 'offset' => '-08:00', 'abbreviation' => 'PST'],
            ['name' => 'Mountain Standard Time', 'offset' => '-07:00', 'abbreviation' => 'MST'],
            ['name' => 'Central Standard Time', 'offset' => '-06:00', 'abbreviation' => 'CST'],
            ['name' => 'Eastern Standard Time', 'offset' => '-05:00', 'abbreviation' => 'EST'],
            ['name' => 'Atlantic Standard Time', 'offset' => '-04:00', 'abbreviation' => 'AST'],
            ['name' => 'Greenwich Mean Time', 'offset' => '+00:00', 'abbreviation' => 'GMT'],
            ['name' => 'Central European Time', 'offset' => '+01:00', 'abbreviation' => 'CET'],
            ['name' => 'Eastern European Time', 'offset' => '+02:00', 'abbreviation' => 'EET'],
            ['name' => 'Australian Eastern Standard Time', 'offset' => '+10:00', 'abbreviation' => 'AEST'],
            ['name' => 'New Zealand Standard Time', 'offset' => '+12:00', 'abbreviation' => 'NZST'],
            ['name' => 'Hawaii-Aleutian Standard Time', 'offset' => '-10:00', 'abbreviation' => 'HAST'],
            ['name' => 'Alaska Standard Time', 'offset' => '-09:00', 'abbreviation' => 'AKST'],
            ['name' => 'Atlantic Daylight Time', 'offset' => '-03:00', 'abbreviation' => 'ADT'],
            ['name' => 'Central Daylight Time', 'offset' => '-05:00', 'abbreviation' => 'CDT'],
            ['name' => 'Eastern Daylight Time', 'offset' => '-04:00', 'abbreviation' => 'EDT'],
            ['name' => 'Mountain Daylight Time', 'offset' => '-06:00', 'abbreviation' => 'MDT'],
            ['name' => 'Pacific Daylight Time', 'offset' => '-07:00', 'abbreviation' => 'PDT'],
            ['name' => 'British Summer Time', 'offset' => '+01:00', 'abbreviation' => 'BST'],
            ['name' => 'Central Africa Time', 'offset' => '+02:00', 'abbreviation' => 'CAT'],
            ['name' => 'Eastern Africa Time', 'offset' => '+03:00', 'abbreviation' => 'EAT'],

        ];
        foreach ($timeZones as $timeZone) {
            DB::table('timezones')->insert([
                'name' => $timeZone['name'],
                'offset' => $timeZone['offset'],
                'abbreviation' => $timeZone['abbreviation'],
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
        Schema::dropIfExists('time_zones');
    }
};
