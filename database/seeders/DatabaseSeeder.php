<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Super Admin',
            'username' => 'superadmin',
            'sponsor' => 'superadmin',
            'email' => 'superadmin@asbeez.com',
            'password' => bcrypt('password'), // password
            'email_verified_at' => now(),
            'active_status' => 1,
            'remember_token' => null,
            'deleted_at' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Joey Lustre',
            'username' => 'asbeesceo',
            'sponsor' => 'superadmin',
            'email' => 'asbeesceo@asbeez.com',
            'password' => bcrypt('password'), // password
            'email_verified_at' => now(),
            'active_status' => 1,
            'remember_token' => null,
            'deleted_at' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // User::factory(5)->create();
        // User::factory(10)->create();
        // User::factory(20)->create();
    }
}
