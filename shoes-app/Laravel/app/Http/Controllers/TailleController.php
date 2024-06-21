<?php

namespace App\Http\Controllers;

use App\Models\Couleur;
use App\Models\Shoe;
use App\Models\Taille;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TailleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $tailles = Taille::all();

            return response()->json([
                'message' => 'Liste de toutes les tailles',
                'tailles' => $tailles,
                'statut' => 'SUCCES',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erreur inattendue',
                'statut' => 'ECHEC',
                'Erreur' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $rules = [
                'nom' => 'required|string',
                'shoe_id' => 'required|integer',
                'couleur_id' => 'required|integer',
            ];
            $validator = Validator::make($request->json()->all(), $rules, [
                'nom.required' => 'Le nom de la couleure est obligatoire',
                'nom.string' => 'Le nom de la couleure doit être une chaine de caractère',
                'shoe_id.required' => 'shoe_id de la couleure est obligatoire',
                'shoe_id.string' => 'shoe_id de la couleure doit être un entier',
                'couleur_id.required' => 'couleur_id de la taille est obligatoire',
                'couleur_id.string' => 'couleur_id de la taille doit être un entier',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Erreur de validation des données',
                    'statut' => 'ECHEC',
                    'Erreur' => $validator->errors(),
                ]);
            }

            if (Shoe::where('id', $request->shoe_id)->exists()) {
                if (Couleur::where('id', $request->couleur_id)->exists()) {
                    $taille = Taille::create($request->validate($rules));
                    return response()->json([
                        'message' => 'taille ajoutée avec succès',
                        'taille' => $taille,
                        'statut' => 'SUCCES',
                    ]);
                    return response()->json([
                        'message' => "L'image de cette taille de la taillee est obligatoire",
                        'status' => 'ECHEC',
                    ]);
                }
                else{
                    return response()->json([
                        'message' => 'couleure inexistante',
                        'statut' => 'ECHEC',
                    ]);
                }
            }
            else{
                return response()->json([
                    'message' => 'Chaussure inexistante',
                    'statut' => 'ECHEC',
                ]);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erreur inattendue',
                'statut' => 'ECHEC',
                'Erreur' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Taille $taille)
    {
        try {
            if($taille){
                return response()->json([
                    'message' => 'La taille',
                    'tailles' => $taille,
                    'statut' => 'SUCCES',
                ]);
            }else{
                return response()->json([
                    'message' => 'taille inexistante',
                    'statut' => 'ECHEC',
                ]);
            }

            
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erreur inattendue',
                'statut' => 'ECHEC',
                'Erreur' => $e->getMessage()
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Taille $taille)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Taille $taille)
    {
        try {
            $rules = [
                'nom' => 'required|string',
                'shoe_id' => 'required|integer',
                'couleur_id' => 'required|integer',
            ];
            $validator = Validator::make($request->json()->all(), $rules, [
                'nom.required' => 'Le nom de la couleure est obligatoire',
                'nom.string' => 'Le nom de la couleure doit être une chaine de caractère',
                'shoe_id.required' => 'shoe_id de la couleure est obligatoire',
                'shoe_id.string' => 'shoe_id de la couleure doit être un entier',
                'couleur_id.required' => 'couleur_id de la taille est obligatoire',
                'couleur_id.string' => 'couleur_id de la taille doit être un entier',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Erreur de validation des données',
                    'statut' => 'ECHEC',
                    'Erreur' => $validator->errors(),
                ]);
            }

            if (Shoe::where('id', $request->shoe_id)->exists()) {
                if (Couleur::where('id', $request->couleur_id)->exists()) {
                    $taille->update($request->validate($rules));
                    return response()->json([
                        'message' => 'taille mise à jour avec succès',
                        'taille' => $taille,
                        'statut' => 'SUCCES',
                    ]);
                }
                else{
                    return response()->json([
                        'message' => 'couleure inexistante',
                        'statut' => 'ECHEC',
                    ]);
                }
            }
            else{
                return response()->json([
                    'message' => 'Chaussure inexistante',
                    'statut' => 'ECHEC',
                ]);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erreur inattendue',
                'statut' => 'ECHEC',
                'Erreur' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Taille $taille)
    {
        try {
            if($taille){
                $taille->delete();
                return response()->json([
                    'message' => 'La taille supprimée',
                    'statut' => 'SUCCES',
                ]);
            }else{
                return response()->json([
                    'message' => 'taille inexistante',
                    'statut' => 'ECHEC',
                ]);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erreur inattendue',
                'statut' => 'ECHEC',
            ]);
        }
    }
}
