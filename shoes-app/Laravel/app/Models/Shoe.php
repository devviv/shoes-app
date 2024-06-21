<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shoe extends Model
{
    use HasFactory;

    protected $guarded=[];

    public function couleurs(){
        return $this->hasMany(Couleur::class);
    }

    public function tailles(){
        return $this->hasMany(Taille::class);
    }
    
}
