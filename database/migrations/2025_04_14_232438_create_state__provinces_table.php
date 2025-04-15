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
        Schema::create('stateprovinces', function (Blueprint $table) {
            $table->id();
            $table->foreignId('country_id')->constrained('countries')->onDelete('cascade');
            $table->string('name')->unique();
            $table->string('code')->unique();
            $table->timestamps();
        });
        // Insert default state/provinces for USA and Canada
        $stateProvinces = [
            ['country_id' => 2, 'name' => 'Alberta', 'code' => 'AB'],
            ['country_id' => 2, 'name' => 'British Columbia', 'code' => 'BC'],
            ['country_id' => 2, 'name' => 'Manitoba', 'code' => 'MB'],
            ['country_id' => 2, 'name' => 'New Brunswick', 'code' => 'NB'],
            ['country_id' => 2, 'name' => 'Newfoundland and Labrador', 'code' => 'NL'],
            ['country_id' => 2, 'name' => 'Nova Scotia', 'code' => 'NS'],
            ['country_id' => 2, 'name' => 'Ontario', 'code' => 'ON'],
            ['country_id' => 2, 'name' => 'Prince Edward Island', 'code' => 'PE'],
            ['country_id' => 2, 'name' => 'Quebec', 'code' => 'QC'],
            ['country_id' => 2, 'name' => 'Saskatchewan', 'code' => 'SK'],
            ['country_id' => 2, 'name' => 'Yukon', 'code' => 'YT'],
            ['country_id' => 2, 'name' => 'Northwest Territories', 'code' => 'NT'],
            ['country_id' => 2, 'name' => 'Nunavut', 'code' => 'NU'],
            ['country_id' => 1, 'name' => 'Alabama', 'code' => 'AL'],
            ['country_id' => 1, 'name' => 'Alaska', 'code' => 'AK'],
            ['country_id' => 1, 'name' => 'Arizona', 'code' => 'AZ'],
            ['country_id' => 1, 'name' => 'Arkansas', 'code' => 'AR'],
            ['country_id' => 1, 'name' => 'California', 'code' => 'CA'],
            ['country_id' => 1, 'name' => 'Colorado', 'code' => 'CO'],
            ['country_id' => 1, 'name' => 'Connecticut', 'code' => 'CT'],
            ['country_id' => 1, 'name' => 'Delaware', 'code' => 'DE'],
            ['country_id' => 1, 'name' => 'Florida', 'code' => 'FL'],
            ['country_id' => 1, 'name' => 'Georgia', 'code' => 'GA'],
            ['country_id' => 1, 'name' => 'Hawaii', 'code' => 'HI'],
            ['country_id' => 1, 'name' => 'Idaho', 'code' => 'ID'],
            ['country_id' => 1, 'name' => 'Illinois', 'code' => 'IL'],
            ['country_id' => 1, 'name' => 'Indiana', 'code' => 'IN'],
            ['country_id' => 1, 'name' => 'Iowa', 'code' => 'IA'],
            ['country_id' => 1, 'name' => 'Kansas', 'code' => 'KS'],
            ['country_id' => 1, 'name' => 'Kentucky', 'code' => 'KY'],
            ['country_id' => 1, 'name' => 'Louisiana', 'code' => 'LA'],
            ['country_id' => 1, 'name' => 'Maine', 'code' => 'ME'],
            ['country_id' => 1, 'name' => 'Maryland', 'code' => 'MD'],
            ['country_id' => 1, 'name' => 'Massachusetts', 'code' => 'MA'],
            ['country_id' => 1, 'name' => 'Michigan', 'code' => 'MI'],
            ['country_id' => 1, 'name' => "Minnesota", "code" => "MN"],
            ['country_id' => 1, "name" => "Mississippi", "code" => "MS"],
            ['country_id' => 1, "name" => "Missouri", "code" => "MO"],
            ['country_id' => 1, "name" => "Montana", "code" => "MT"],
            ['country_id' => 1, "name" => "Nebraska", "code" => "NE"],
            ['country_id' => 1, "name" => "Nevada", "code" => "NV"],
            ['country_id' => 1, "name" => "New Hampshire", "code" => "NH"],
            ['country_id' => 1, "name" => "New Jersey", "code" => "NJ"],
            ['country_id' => 1, "name" => "New Mexico", "code" => "NM"],
            ['country_id' => 1, "name" => "New York", "code" => "NY"],
            ['country_id' => 1, "name" => "North Carolina", "code" => "NC"],
            ['country_id' => 1, "name" => "North Dakota", "code" => "ND"],
            ['country_id' => 1, "name" => "Ohio", "code" => "OH"],
            ['country_id' => 1, "name" => "Oklahoma", "code" => "OK"],
            ['country_id' => 1, "name" => "Oregon", "code" => "OR"],
            ['country_id' => 1, "name" => "Pennsylvania", "code" => "PA"],
            ['country_id' => 1, 'name' => 'Rhode Island', 'code' => 'RI'],
            ['country_id' => 1, 'name' => 'South Carolina', 'code' => 'SC'],
            ['country_id' => 1, 'name' => 'South Dakota', 'code' => 'SD'],
            ['country_id' => 1, 'name' => 'Tennessee', 'code' => 'TN'],
            ['country_id' => 1, 'name' => 'Texas', 'code' => 'TX'],
            ['country_id' => 1, 'name' => 'Utah', 'code' => 'UT'],
            ['country_id' => 1, 'name' => 'Vermont', 'code' => 'VT'],
            ['country_id' => 1, 'name' => 'Virginia', 'code' => 'VA'],
            ['country_id' => 1, 'name' => 'Washington', 'code' => 'WA'],
            ['country_id' => 1, 'name' => 'West Virginia', 'code' => 'WV'],
            ['country_id' => 1, 'name' => 'Wisconsin', 'code' => 'WI'],
            ['country_id' => 1, 'name' => 'Wyoming', 	'code'=>	"WY"]
        ];
        DB::table('stateprovinces')->insert($stateProvinces);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('state_provinces');
    }
};
