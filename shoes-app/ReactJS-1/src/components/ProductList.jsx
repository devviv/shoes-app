import { SearchContext } from '../context/SearchContext';
import { useContext } from 'react';
import { chaussures } from '../App';
import Product from './Product';

export default function ProductList() {
    const { searchValue } = useContext(SearchContext)

    const searchProducts = chaussures.filter((product) => {
        product.nom.toLowerCase().includes(searchValue.toLowerCase())
    })
    return (
        <Product products={searchProducts}></Product>
    )
}