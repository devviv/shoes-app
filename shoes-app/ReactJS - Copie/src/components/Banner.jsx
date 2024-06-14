export default function Banner(){
    return (
        <div className="py-24 px-10 banner text-white">
            <h1 className="text-6xl font-black text-start py-8 text-black">
                De jolies chaussures <br /> pour vous !
            </h1>
            <p className="text-start">Shoes Lux vous offre le meilleur</p>
            <h1 className="text-start py-8 mb-4">
                <span className="text-2xl font-bold mr-8">30.000 FCFA</span>
                <span className="line-through">35.000 FCFA</span>
            </h1>
            <a href="#" className="px-8 py-4 rounded-md shadow-md bg-blue-600 text-white hover:bg-white hover:text-blue-600">Voir plus</a>
        </div>
    )
}