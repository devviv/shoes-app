<?php

use App\Models\Couleur;
use App\Models\Shoe;
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
        Schema::create('tailles', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->foreignIdFor(Couleur::class);
            $table->foreignIdFor(Shoe::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tailles');
    }
};
