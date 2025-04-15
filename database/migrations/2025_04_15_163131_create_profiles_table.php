<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
          $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Add foreign key
          $table->foreignId('stateprovince_id')->nullable()->constrained()->onDelete('cascade'); // Make nullable
          $table->foreignId('timezone_id')->nullable()->constrained()->onDelete('cascade');
          $table->foreignId('rank_id')->default(1)->constrained()->onDelete('cascade');
          $table->string('avatar')->nullable();
          $table->text('bio')->nullable();
          $table->boolean('is_online')->default(0);
          $table->timestamp('last_access')->nullable();
          $table->string('last_ip', 45)->nullable();
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
