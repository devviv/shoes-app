<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taille extends Model
{
    use HasFactory;

    protected $guarded =[];

    public function couleur() {
        return $this->belongsTo(Couleur::class);
    }
    public function shoe() {
        return $this->belongsTo(Shoe::class);
    }
}
