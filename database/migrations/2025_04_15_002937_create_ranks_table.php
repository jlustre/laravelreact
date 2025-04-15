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
        Schema::create('ranks', function (Blueprint $table) {
            $table->id();
            $table->integer('level')->default(1);
            $table->string('name')->unique();
            $table->string('abbr')->nullable();
            $table->string('icon')->nullable();
            $table->string('description')->nullable();
            $table->integer('rank_points')->default(0);
            $table->integer('points_required')->default(0); //points needed to reach this rank
            $table->timestamps();
        });
        // Insert default ranks
        $ranks = [
            ['level' => 1, 'name' => 'WLA-Private', 'abbr' => 'WLA-PVT', 'icon' => 'wla_pvt.png', 'rank_points' => 10, 'points_required' => 0],
            ['level' => 2, 'name' => 'WLA-Corporal', 'abbr' => 'WLA-CPL', 'icon' => 'wla_cpl.png', 'rank_points' => 20, 'points_required' => 60],
            ['level' => 3, 'name' => 'WLA-Sergeant', 'abbr' => 'WLA-SGT', 'icon' => 'wla_sgt.png', 'rank_points' => 30, 'points_required' => 80],
            ['level' => 4, 'name' => 'WLA-Staff Sergeant', 'abbr' => 'WLA-SSGT', 'icon' => 'wla_ssgt.png', 'rank_points' => 40, 'points_required' => 100],
            ['level' => 5, 'name' => 'WLA-Technical Sergeant', 'abbr' => 'WLA-TSGT', 'icon' => 'wla_tsgt.png', 'rank_points' => 60, 'points_required' => 200],
            ['level' => 6, 'name' => 'WLA-First Sergeant', 'abbr' => 'WLA-FSGT', 'icon' => 'wla_fsgt.png', 'rank_points' => 80, 'points_required' => 300],
            ['level' => 7, 'name' => 'WLA-2nd Lieutenant', 'abbr' => 'WLA-2LT', 'icon' => 'wla_2lt.png', 'rank_points' => 100, 'points_required' => 400],
            ['level' => 8, 'name' => 'WLA-1st Lieutenant', 'abbr' => 'WLA-1LT', 'icon' => 'wla_1lt.png', 'rank_points' => 150, 'points_required' => 500],
            ['level' => 9, 'name' => 'WLA-Captain', 'abbr' => 'WLA-CPT', 'icon' => 'wla_cpt.png', 'rank_points' => 200, 'points_required' => 600],
            ['level' => 10, 'name' => 'WLA-Major', 'abbr' => 'WLA-MAJ', 'icon' => 'wla_maj.png', 'rank_points' => 250, 'points_required' => 800],
            ['level' => 11, 'name' => 'WLA-Colonel', 'abbr' => 'WLA-COL', 'icon' => 'wla_col.png', 'rank_points' => 300, 'points_required' => 1000],
            ['level' => 12, 'name' => 'WLA-1Star General', 'abbr' => 'WLA-1GEN', 'icon' => 'wla_1gen.png', 'rank_points' => 400, 'points_required' => 2000],
            ['level' => 13, 'name' => 'WLA-2Star General', 'abbr' => 'WLA-2GEN', 'icon' => 'wla_2gen.png', 'rank_points' => 600, 'points_required' => 4000],
            ['level' => 14, 'name' => 'WLA-3Star General', "abbr" => 'WLA-3GEN', "icon" => 'wla_3gen.png', 'rank_points' => 800, 'points_required' => 6000],
            ['level' => 15, 'name' => 'WLA-4Star General', "abbr" => 'WLA-4GEN', "icon" => 'wla_4gen.png', 'rank_points' => 1000, 'points_required' => 8000],
            ['level' => 16, 'name' => 'WLA-5Star General', "abbr" => 'WLA-5GEN', "icon" => 'wla_5gen.png', 'rank_points' => 1500, 'points_required' => 10000],

        ];
        foreach ($ranks as $rank) {
            DB::table('ranks')->insert($rank);
        }

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ranks');
    }
};
