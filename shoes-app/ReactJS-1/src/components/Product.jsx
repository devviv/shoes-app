// import product_1 from '../assets/img/products/apple-watch.png'
import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { chaussures } from '../App'

export default function Product({ products }) {

    // console.log(chaussures);
    const { searchValue } = useContext(SearchContext)
    // console.log("Produit", searchValue);
    const searchProducts = (search) => {
        return chaussures.filter((product) =>
            product.nom.toLowerCase().includes(search.toLowerCase())
        )
    }
    products = searchProducts(searchValue);
    const productList = products.map((product, index) =>
        <div className="flex-col rounded-md border-2 border-gray-100 p-2 shadow-lg col-span-1" key={index}>
            <Link to={`product/${product.id}`}><img src={product.image} alt="Produit1"
                className=" border-b-2 border-gray-400 rounded-e-xl rounded-s-xl p-2 w-full" /></Link>


            <div className="content p-3">
                <h1 className="text-2xl font-bold m-y-2">{product.nom}</h1>
                {/* <p className='text-lg text-zinc-600 font-bold mb-3'>Categorie</p> */}
                <p className="flex items-center">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 22 20">
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
                    <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-4">126 avis</p>
                </p>
                <h1 className="text-start py-2 mb-4">
                    <span className="text-lg font-bold mr-8">{product.prix} FCFA</span>
                    <span className="line-through">{product.prix_fictif} FCFA</span>
                </h1>
            </div>
        </div>
    );
    return products.length !== 0 ? (
        <div className="px-8 py-12">
            <h1 className="font-bold text-3xl mb-12">Les plus populaires</h1>
            <div className="grid gap-y-8 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full">
                {productList}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    ) :
        <div className='m-6 mx-auto max-w-md font-bold'>
            <p >Aucune chaussure trouvé</p>
        </div>

}
