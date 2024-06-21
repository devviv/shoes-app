<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function endpoints(){
        $endpoints = $routes = [
            // Routes ShoeController
            [
                'description' => "Afficher toutes les chaussures",
                'endpoint' => "shoes",
                'methode' => "GET",
                'paramètres' => []
            ],
            [
                'description' => "Ajouter une nouvelle chaussure",
                'endpoint' => "add-shoe",
                'methode' => "POST",
                'paramètres' => []
            ],
            [
                'description' => "Mettre à jour une chaussure",
                'endpoint' => "add-shoe/{shoe}",
                'methode' => "PUT",
                'paramètres' => ["shoe"]
            ],
            [
                'description' => "Afficher une chaussure",
                'endpoint' => "show-shoe/{shoe}",
                'methode' => "GET",
                'paramètres' => ["shoe"]
            ],
            [
                'description' => "Supprimer une chaussure",
                'endpoint' => "delete-shoe/{shoe}",
                'methode' => "DELETE",
                'paramètres' => ["shoe"]
            ],
        
            // Routes CouleurController
            [
                'description' => "Afficher toutes les couleurs",
                'endpoint' => "couleurs",
                'methode' => "GET",
                'paramètres' => []
            ],
            [
                'description' => "Ajouter une nouvelle couleur",
                'endpoint' => "add-couleur",
                'methode' => "POST",
                'paramètres' => []
            ],
            [
                'description' => "Mettre à jour une couleur",
                'endpoint' => "add-couleur/{couleur}",
                'methode' => "PUT",
                'paramètres' => ["couleur"]
            ],
            [
                'description' => "Afficher une couleur",
                'endpoint' => "show-couleur/{couleur}",
                'methode' => "GET",
                'paramètres' => ["couleur"]
            ],
            [
                'description' => "Supprimer une couleur",
                'endpoint' => "delete-couleur/{couleur}",
                'methode' => "DELETE",
                'paramètres' => ["couleur"]
            ],
        
            // Routes TailleController
            [
                'description' => "Afficher toutes les tailles",
                'endpoint' => "tailles",
                'methode' => "GET",
                'paramètres' => []
            ],
            [
                'description' => "Ajouter une nouvelle taille",
                'endpoint' => "add-taille",
                'methode' => "POST",
                'paramètres' => []
            ],
            [
                'description' => "Mettre à jour une taille",
                'endpoint' => "add-taille/{taille}",
                'methode' => "PUT",
                'paramètres' => ["taille"]
            ],
            [
                'description' => "Afficher une taille",
                'endpoint' => "show-taille/{taille}",
                'methode' => "GET",
                'paramètres' => ["taille"]
            ],
            [
                'description' => "Supprimer une taille",
                'endpoint' => "delete-taille/{taille}",
                'methode' => "DELETE",
                'paramètres' => ["taille"]
            ],
        
            // Routes UserController
            [
                'description' => "Enregistrer un nouvel utilisateur",
                'endpoint' => "register",
                'methode' => "POST",
                'paramètres' => []
            ],
            [
                'description' => "Connecter un utilisateur",
                'endpoint' => "login",
                'methode' => "POST",
                'paramètres' => []
            ],
        ];
        return response()->json([
            "message" => "Tous les endpoints",
            "status" => "SUCCESS",
            "endpoints" => $endpoints
        ]);      
    }
    public function register(Request $request)
    {
        try {
            $validator = Validator::make(
                $request->all(),
                [
                    "name" => "string|required",
                    "email" => "unique:users,email|required|email",
                    "password" => "string|required",
                ]
            );


            if ($validator->fails()) {
                return response()->json([
                    "status" => "ECHEC",
                    "erreur" => $validator->errors()
                ]);
            }


            // return $request['name'];
            $user = User::create([
                "name" => $request['name'],
                "email" => $request['email'],
                "password" => Hash::make($request['password']),
            ]);


            return response()->json([
                "message" => "Agent routier ajoutée",
                "status" => "SUCCESS",
                "agent_routier" => $user
            ]);
        } catch (Exception $e) {
            return response()->json([
                "message" => "Erreur",
                "status" => "ECHEC",
                "erreur" => $e->getMessage()
            ]);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            "email" => "required|email",
            "password" => "required",
        ]);


        // Verifier si la validation a échoué
        if ($validator->fails()) {
            return response()->json([
                "statut" => "ECHEC",
                "errors" => $validator->errors()
            ]);
        }

        $user = User::where('email', $request->json("email"))->first();

        if (!$user) {
            return response()->json([
                "statut" => "ECHEC",
                "errors" => "Votre email est incorrect"
            ]);
        }

        if (Hash::check($request->json("password"), $user->password)) {
            Auth::login($user);
            $token = $user->createToken('userToken')->plainTextToken;

            return response()->json([
                "status" => "SUCCESS",
                "user" => $user,
                "token" => $token
            ]);
        }


        // On retourne l'erreur du mot de passe
        return response()->json([
            "status" => "ECHEC",
            "errors" => "Votre mot de passe est incorrect!"
        ]);
    }
}
