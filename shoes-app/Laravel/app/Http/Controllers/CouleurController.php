<?php

namespace App\Http\Controllers;

use App\Models\Couleur;
use App\Models\Shoe;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CouleurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $couleurs = Couleur::all();

            return response()->json([
                'message' => 'Liste de toutes les couleurs',
                'couleurs' => $couleurs,
                'statut' => 'SUCCES',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erreur inattendue',
                'statut' => 'ECHEC',
                'Erreur' => $e->getMessage()
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
                'image' => 'required|mimes:png,jpg,jpeg',
                'est_principale' => 'required|boolean',
            ];
            $validator = Validator::make(
                $request->all(),
                $rules,
                [
                    'nom.required' => 'Le nom de la couleure est obligatoire',
                    'nom.string' => 'Le nom de la couleure doit être une chaine de caractère',
                    'shoe_id.required' => 'shoe_id de la couleure est obligatoire',
                    'shoe_id.string' => 'shoe_id de la couleure doit être un entier',
                    'image.required' => "L'image de la couleure est obligatoire",
                    'image.mines' => "L'image doit être en format png, jpg ou jpeg",
                    'est_principale.required' => 'est_principale est obligatoire',
                    'est_principale.boolean' => 'est_principale doit être un booléen',
                ],
            );
            if($validator->fails()){
                return response()->json([
                    'message' => 'Erreur de validation des données',
                    'statut' => 'ECHEC',
                    'Erreur' => $validator->errors(),
                ]);
            }

            if(Shoe::where('id', $request->shoe_id)->exists()){
                if ($request->hasFile('image')) {
                    $imagepath = $request->file('image')->storeAs('shoes', $request->file('image')->getClientOriginalName());

                    $couleurdata = $request->validate($rules);
                    $couleurdata['image'] = $imagepath;

                    $couleur = Couleur::create($couleurdata);
                    return response()->json([
                        'message' => 'couleure ajoutée avec succès',
                        'couleure' => $couleur,
                        'statut' => 'SUCCES',
                    ]);
                }
                return response()->json(
                    [
                        "message" => "L'image de cette couleur de la couleure est obligatoire",
                        "status" => "ECHEC"
                    ]
                );
            }else{
                return response()->json([
                    'message' => 'Chaussure inexistante',
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
     * Display the specified resource.
     */
    public function show(Couleur $couleur)
    {
        try {
            if($couleur){
                return response()->json([
                    'message' => 'La couleure',
                    'couleures' => $couleur,
                    'statut' => 'SUCCES',
                ]);
            }else{
                return response()->json([
                    'message' => 'couleure inexistante',
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
    public function edit(Couleur $couleur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Couleur $couleur)
    {
        try {
            $rules = [
                'nom' => 'required|string',
                'shoe_id' => 'required|integer',
                'image' => 'required|mimes:png,jpg,jpeg',
                'est_principale' => 'required|boolean',
            ];
            $validator = Validator::make(
                $request->all(),
                $rules,
                [
                    'nom.required' => 'Le nom de la couleure est obligatoire',
                    'nom.string' => 'Le nom de la couleure doit être une chaine de caractère',
                    'shoe_id.required' => 'shoe_id de la couleure est obligatoire',
                    'shoe_id.string' => 'shoe_id de la couleure doit être un entier',
                    'image.required' => "L'image de la couleure est obligatoire",
                    'image.mines' => "L'image doit être en format png, jpg ou jpeg",
                    'est_principale.required' => 'est_principale est obligatoire',
                    'est_principale.boolean' => 'est_principale doit être un booléen',
                ],
            );
            if($validator->fails()){
                return response()->json([
                    'message' => 'Erreur de validation des données',
                    'statut' => 'ECHEC',
                    'Erreur' => $validator->errors(),
                ]);
            }

            if(Shoe::where('id', $request->shoe_id)->exists()){
                if ($request->hasFile('image')) {
                    $imagepath = $request->file('image')->storeAs('shoes', $request->file('image')->getClientOriginalName());

                    $couleurdata = $request->validate($rules);
                    $couleurdata['image'] = $imagepath;

                    $couleur->update($couleurdata);
                    return response()->json([
                        'message' => 'couleure ajoutée avec succès',
                        'couleure' => $couleur,
                        'statut' => 'SUCCES',
                    ]);
                }
                return response()->json(
                    [
                        "message" => "L'image de cette couleur de la couleure est obligatoire",
                        "status" => "ECHEC"
                    ]
                );
            }else{
                return response()->json([
                    'message' => 'Chaussure inexistante',
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
     * Remove the specified resource from storage.
     */
    public function destroy(Couleur $couleur)
    {
        try {
            if($couleur){
                $couleur->delete();
                return response()->json([
                    'message' => 'La couleure supprimée',
                    'statut' => 'SUCCES',
                ]);
            }else{
                return response()->json([
                    'message' => 'couleure inexistante',
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
