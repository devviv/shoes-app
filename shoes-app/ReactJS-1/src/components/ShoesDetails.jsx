import { useParams } from "react-router-dom"
import { chaussures } from "../App"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { HeartContext } from "../context/HeartContext"

export default function ShoesDetails() {

    const param = useParams()
    const {addToCart} = useContext(CartContext);
    const {addHeart} = useContext(HeartContext);
    const chaussure = chaussures[param.productId - 1]
    console.log(chaussure);

    const principalImageIndex = chaussure.couleurs.findIndex(couleur => couleur.est_principale === 1)
    console.log("principalImageIndex", principalImageIndex);
    const [principalImage, setPrincipaleImage] = useState(principalImageIndex)

    const getIndex = (id) => {
        return chaussure.couleurs.findIndex(couleur => couleur.id === id)
    }
    console.log(principalImage);
    const couleurs_1 = chaussure.couleurs.map(couleur =>
        <img src={couleur.image} alt={couleur.nom} className={`h-20 w-20 border-2 p-1 m-2 rounded-lg cursor-pointer ${principalImage === getIndex(couleur.id) ? 'border-black' : null} `} onClick={() =>
            setPrincipaleImage(getIndex(couleur.id))} />
    )
    const couleurs_2 = chaussure.couleurs.map(couleur =>
        <img src={couleur.image} alt="" className={`h-14 border-2 p-1 mx-2 rounded-lg cursor-pointer ${principalImage === getIndex(couleur.id) ? 'border-black' : null}`} onClick={() =>
            setPrincipaleImage(getIndex(couleur.id))} />
    )

    const tailles = chaussure.couleurs[principalImage].tailles.map(taille =>
        <p className="px-6 py-2 border-2 border-gray-300 rounded-md shadow-lg m-1">
            {taille.taille} </p>
    )

    return (
        <div className="py-8 px-4">
            {/* {param.productId} */}
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 py-8 px-4">
                <div className="col-span-1 items-center">
                    <div className="image rounded-xl p-2 bg-gray-400 shadow-lg w-full h-96">
                        <img src={chaussure.couleurs[principalImage].image} alt=""
                            className="object-contain w-full h-full" />
                    </div>
                    <div className="color-images mt-4 flex flex-wrap">
                        {couleurs_1}
                        {/* <p className="h-20 w-20 border-2 p-1 m-2 rounded-lg text-wrap flex justify-center items-center ">Voir
                    plus</p> */}
                    </div>
                </div>

                <div className="details md:ml-4 col-span-1">
                    <div className="content px-3">
                        <h1 className="text-2xl font-bold mb-4"> {chaussure.nom} </h1>
                        <p className="flex items-center mb-4">
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p className="ml-4">126 avis</p>
                        </p>

                        <h1 className="text-start py-2 mb-4">
                            <span className="text-3xl font-extrabold mr-8">{chaussure.prix} FCFA</span>
                        </h1>
                        <p className="items-center">Couleurs <span className="text-black font-semibold"> <span
                            className="font-bold">.</span> {chaussure.couleurs[principalImage].nom} </span></p>
                        <div className="color-images mt-2 flex">
                            {couleurs_2}
                        </div>
                        <p className="items-center my-2">Tailles <span className="text-black font-semibold"> <span
                            className="font-bold">.</span> Homme </span></p>
                        <div className="color-images flex flex-wrap">
                            {tailles}
                        </div>
                    </div>
                    <div>
                        <div className="cart-like flex">
                            <button
                                className=" w-5/6 m-3 px-6 py-3 rounded-lg text-center items-center text-white hover:text-first-100 bg-first-100  hover:bg-second-100" onClick={() => addToCart(chaussure.id)}>
                                <p className="text-center items-center flex justify-center">
                                    <svg class="w-6 h-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                            d="M5 3a1 1 0 0 0 0 2h.687L7.82 15.24A3 3 0 1 0 11.83 17h2.34A3 3 0 1 0 17 15H9.813l-.208-1h8.145a1 1 0 0 0 .979-.796l1.25-6A1 1 0 0 0 19 6h-2.268A2 2 0 0 1 15 9a2 2 0 1 1-4 0 2 2 0 0 1-1.732-3h-1.33L7.48 3.796A1 1 0 0 0 6.5 3H5Z"
                                            clip-rule="evenodd" />
                                        <path fill-rule="evenodd"
                                            d="M14 5a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V8h1a1 1 0 1 0 0-2h-1V5Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    Ajouter au panier
                                </p>
                            </button>
                            <button 
                                className=" m-3 p-3 rounded-lg m text-center items-center  text-first-100 hover:text-second-100 bg-second-100 hover:bg-first-100" onClick={()=> addHeart(chaussure.id)}>

                                <p className=" items-center text-center flex justify-center ">
                                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                    </svg>
                                </p>
                            </button>



                        </div>
                        <p className="delivery flex font-semibold">
                            Livraison à domicile avec 1500 FCFA
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
