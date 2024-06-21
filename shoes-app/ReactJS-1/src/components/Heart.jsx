
import React, { useContext, useEffect, useState } from 'react';
import { chaussures } from '../App'
import { HeartContext } from '../context/HeartContext';


export default function Cart() {
    const { heart, removeFromHeart } = useContext(HeartContext)
    const [hearts, setHearts] = useState(heart)

    useEffect(() => {
        setHearts(heart)
    }, [heart]);

    let heartChassures = null;

    if (hearts.length !== 0) {
        // console.log(hearts.length != 0, hearts);
        heartChassures = [];
        // hearts = [1, 1, 1]
        for (let i = 0; i < hearts.length; i++) {
            console.log("hearts", hearts[i]);
            console.log("chaussures", chaussures[hearts[i] - 1]);
            heartChassures.push(chaussures[hearts[i] - 1]);
        }

        console.log("heartChassures", heartChassures);

        const heartChassuresList = heartChassures.map((heartChassure, index) => (
            <li key={index} class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <div class="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={heartChassure.image} alt={heartChassure.nom} />
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">
                            {heartChassure.nom}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        {heartChassure.prix} FCFA
                    </div>
                    <button className='flex' onClick={() => {
                        removeFromHeart(heartChassure.id)
                    }}>
                        <svg class="w-6 h-6 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                        </svg>
                        <p>Retirer des aimés</p>
                    </button>
                </div>
            </li>
        ));
        return (
            <ul className="items-center mx-auto max-w-md divide-y divide-gray-200 m-6">
                {heartChassuresList}
            </ul>
        );
    } else {
        return (
            <div className='m-6 mx-auto max-w-md font-bold'>
                <p >Vous n'avez rien aimé</p>
            </div>
        )
    }
}