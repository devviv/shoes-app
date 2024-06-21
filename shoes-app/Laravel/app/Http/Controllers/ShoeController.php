<?php

namespace App\Http\Controllers;

use App\Models\Shoe;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShoeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $shoes = Shoe::with('couleurs.tailles')->get();

            return response()->json([
                'message' => 'Liste de toutes les chaussures',
                'chaussures' => $shoes,
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
                'description' => 'string',
                'prix' => 'required|integer|min_digits:0',
                'prix_fictif' => 'integer|min_digits:0',
            ];
            $validator = Validator::make(
                $request->json()->all(),
                $rules,
                [
                    'nom.required' => 'Le nom de la chaussure est obligatoire',
                    'nom.string' => 'Le nom de la chaussure doit être une chaine de caractère',
                    'description.string' => 'La description de la chaussure doit être une chaine de caractère',
                    'prix.required' => 'Le prix de la chaussure est obligatoire',
                    'prix.integer' => 'Le prix de la chaussure doit être un entier',
                    'prix.min_digits' => 'Le prix de la chaussure doit être un entier supérieur à zéro',
                    'prix_fictif.required' => 'Le prix_fictif de la chaussure est obligatoire',
                    'prix_fictif.integer' => 'Le prix_fictif de la chaussure doit être un entier',
                    'prix_fictif.min_digits' => 'Le prix_fictif de la chaussure doit être un entier supérieur à zéro',
                ],
            );
            if($validator->fails()){
                return response()->json([
                    'message' => 'Erreur de validation des données',
                    'statut' => 'ECHEC',
                    'Erreur' => $validator->errors(),
                ]);
            }

            if($request->json('prix_fictif') <= $request->json('prix')){
                return response()->json([
                    'message' => 'Erreur de validation des données',
                    'statut' => 'ECHEC',
                    'Erreur' => "Le prix_fictif doit supérieur à prix",
                ]);
            }

            $shoe = Shoe::create($request->validate($rules));

            return response()->json([
                'message' => 'Chaussure ajoutée avec succès',
                'chaussures' => $shoe,
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
     * Display the specified resource.
     */
    public function show(Shoe $shoe)
    {
        try {
            if($shoe){
                return response()->json([
                    'message' => 'La chaussure',
                    'chaussures' => $shoe,
                    'statut' => 'SUCCES',
                ]);
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
     * Show the form for editing the specified resource.
     */
    public function edit(Shoe $shoe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Shoe $shoe)
    {
        try {
            if($shoe){
                $rules = [
                    'nom' => 'required|string',
                    'description' => 'string',
                    'prix' => 'required|integer|min_digits:0',
                    'prix_fictif' => 'integer|min_digits:0',
                ];
                $validator = Validator::make(
                    $request->json()->all(),
                    $rules,
                    [
                        'nom.required' => 'Le nom de la chaussure est obligatoire',
                        'nom.string' => 'Le nom de la chaussure doit être une chaine de caractère',
                        'description.string' => 'La description de la chaussure doit être une chaine de caractère',
                        'prix.required' => 'Le prix de la chaussure est obligatoire',
                        'prix.integer' => 'Le prix de la chaussure doit être un entier',
                        'prix.min_digits' => 'Le prix de la chaussure doit être un entier supérieur à zéro',
                        'prix_fictif.required' => 'Le prix_fictif de la chaussure est obligatoire',
                        'prix_fictif.integer' => 'Le prix_fictif de la chaussure doit être un entier',
                        'prix_fictif.min_digits' => 'Le prix_fictif de la chaussure doit être un entier supérieur à zéro',
                    ],
                );
                if($validator->fails()){
                    return response()->json([
                        'message' => 'Erreur de validation des données',
                        'statut' => 'ECHEC',
                        'Erreur' => $validator->errors(),
                    ]);
                }
    
                if($request->json('prix_fictif') <= $request->json('prix')){
                    return response()->json([
                        'message' => 'Erreur de validation des données',
                        'statut' => 'ECHEC',
                        'Erreur' => "Le prix_fictif doit supérieur à prix",
                    ]);
                }
    
                $shoe->update($request->validate($rules));
    
                return response()->json([
                    'message' => 'Chaussure mise à jour avec succès',
                    'chaussures' => $shoe,
                    'statut' => 'SUCCES',
                ]);
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
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shoe $shoe)
    {
        try {
            if($shoe){
                $shoe->delete();
                return response()->json([
                    'message' => 'La chaussure supprimée',
                    'statut' => 'SUCCES',
                ]);
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
            ]);
        }
    }
}
