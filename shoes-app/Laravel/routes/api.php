<?php

use App\Http\Controllers\CouleurController;
use App\Http\Controllers\ShoeController;
use App\Http\Controllers\TailleController;
use App\Http\Controllers\UserController;
use App\Models\Couleur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('shoes', [ShoeController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    // Route::get('shoes', [ShoeController::class, 'index']);
    Route::post('add-shoe', [ShoeController::class, 'store']);
    Route::put('add-shoe/{shoe}', [ShoeController::class, 'store']);
    Route::get('show-shoe/{shoe}', [ShoeController::class, 'show']);
    Route::delete('delete-shoe/{shoe}', [ShoeController::class, 'destroy']);

    Route::get('couleurs', [CouleurController::class, 'index']);
    Route::post('add-couleur', [CouleurController::class, 'store']);
    Route::put('add-couleur/{couleur}', [CouleurController::class, 'store']);
    Route::get('show-couleur/{couleur}', [CouleurController::class, 'show']);
    Route::delete('delete-couleur/{couleur}', [CouleurController::class, 'destroy']);

    Route::get('tailles', [TailleController::class, 'index']);
    Route::post('add-taille', [TailleController::class, 'store']);
    Route::put('add-taille/{taille}', [TailleController::class, 'store']);
    Route::get('show-taille/{taille}', [TailleController::class, 'show']);
    Route::delete('/delete-taille/{taille}', [TailleController::class, 'destroy']);
});

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('/', [UserController::class, 'endpoints']);
