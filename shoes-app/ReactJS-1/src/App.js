// import logo from './logo.svg';
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
// import Filter from "./components/Filter";
import Product from "./components/Product";
import ShoesDetails from "./components/ShoesDetails";
import ErrorPage from "./error-page";
import { CartProvider } from "./context/CartContext";
import { HeartProvider } from "./context/HeartContext";
import { SearchProvider } from "./context/SearchContext";
import Cart from "./components/Cart";
import Heart from "./components/Heart";

import adidasBlanc from "./assets/img/products/Adidas-Superstar-Blanc.png";
import adidasNoir from "./assets/img/products/Adidas-Superstar-Noir.png";
import converseChuckTaylorBlanc from "./assets/img/products/Converse-Chuck-Taylor-Blanc.png";
import converseChuckTaylorNoir from "./assets/img/products/Converse-Chuck-Taylor-Noir.png";
import pumaSuedeBleu from "./assets/img/products/Puma-Suede-Bleu.png";
import pumaSuedeGris from "./assets/img/products/Puma-Suede-Gris.png";
import vansOldSkoolNoir from "./assets/img/products/Vans-Old-Skool-Noir.png";
import vansOldSkoolBlanc from "./assets/img/products/Vans-Old-Skool-Blanc.png";
import reebokClassicLeatherNoir from "./assets/img/products/Reebok-Classic-Leather-Noir.png";
import reebokClassicLeatherBlanc from "./assets/img/products/Reebok-Classic-Leather-Blanc.png";

export const chaussures = [
  {
    id: 1,
    nom: "Adidas Superstar",
    prix: 15000,
    prix_fictif: 18000,
    image: adidasBlanc,
    couleurs: [
      {
        id: 1,
        shoe_id: 2,
        nom: "Blanc",
        image: adidasBlanc,
        est_principale: 1,
        tailles: [
          {
            taille: "37",
            stock: 18,
          },
          {
            taille: "38",
            stock: 22,
          },
          {
            taille: "39",
            stock: 14,
          },
          {
            taille: "40",
            stock: 9,
          },
          {
            taille: "41",
            stock: 6,
          },
        ],
      },
      {
        id: 2,
        shoe_id: 2,
        nom: "Noir",
        image: adidasNoir,
        est_principale: 0,
        tailles: [
          {
            taille: "37",
            stock: 15,
          },
          {
            taille: "38",
            stock: 19,
          },
          {
            taille: "39",
            stock: 11,
          },
          {
            taille: "40",
            stock: 7,
          },
          {
            taille: "41",
            stock: 4,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    nom: "Converse Chuck Taylor",
    prix: 12000,
    prix_fictif: 16000,
    image: converseChuckTaylorNoir,
    couleurs: [
      {
        id: 3,
        shoe_id: 3,
        nom: "Noir",
        image: converseChuckTaylorNoir,
        est_principale: 1,
        tailles: [
          {
            taille: "36",
            stock: 8,
          },
          {
            taille: "37",
            stock: 12,
          },
          {
            taille: "38",
            stock: 16,
          },
          {
            taille: "39",
            stock: 10,
          },
          {
            taille: "40",
            stock: 6,
          },
        ],
      },
      {
        id: 4,
        shoe_id: 3,
        nom: "Blanc",
        image: converseChuckTaylorBlanc,
        est_principale: 0,
        tailles: [
          {
            taille: "36",
            stock: 7,
          },
          {
            taille: "37",
            stock: 10,
          },
          {
            taille: "38",
            stock: 14,
          },
          {
            taille: "39",
            stock: 9,
          },
          {
            taille: "40",
            stock: 5,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nom: "Puma Suede",
    prix: 18000,
    prix_fictif: 22000,
    image: pumaSuedeBleu,
    couleurs: [
      {
        id: 5,
        shoe_id: 4,
        nom: "Bleu",
        image: pumaSuedeBleu,
        est_principale: 1,
        tailles: [
          {
            taille: "38",
            stock: 11,
          },
          {
            taille: "39",
            stock: 15,
          },
          {
            taille: "40",
            stock: 18,
          },
          {
            taille: "41",
            stock: 8,
          },
          {
            taille: "42",
            stock: 4,
          },
        ],
      },
      {
        id: 6,
        shoe_id: 4,
        nom: "Gris",
        image: pumaSuedeGris,
        est_principale: 0,
        tailles: [
          {
            taille: "38",
            stock: 13,
          },
          {
            taille: "39",
            stock: 17,
          },
          {
            taille: "40",
            stock: 20,
          },
          {
            taille: "41",
            stock: 10,
          },
          {
            taille: "42",
            stock: 6,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    nom: "Vans Old Skool",
    prix: 14000,
    prix_fictif: 18000,
    image: vansOldSkoolNoir,
    couleurs: [
      {
        id: 7,
        shoe_id: 5,
        nom: "Noir",
        image: vansOldSkoolNoir,
        est_principale: 1,
        tailles: [
          {
            taille: "36",
            stock: 9,
          },
          {
            taille: "37",
            stock: 13,
          },
          {
            taille: "38",
            stock: 17,
          },
          {
            taille: "39",
            stock: 11,
          },
          {
            taille: "40",
            stock: 7,
          },
        ],
      },
      {
        id: 8,
        shoe_id: 5,
        nom: "Blanc",
        image: vansOldSkoolBlanc,
        est_principale: 0,
        tailles: [
          {
            taille: "36",
            stock: 8,
          },
          {
            taille: "37",
            stock: 12,
          },
          {
            taille: "38",
            stock: 16,
          },
          {
            taille: "39",
            stock: 10,
          },
          {
            taille: "40",
            stock: 6,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    nom: "Reebok Classic Leather",
    prix: 16000,
    prix_fictif: 20000,
    image: reebokClassicLeatherBlanc,
    couleurs: [
      {
        id: 9,
        shoe_id: 6,
        nom: "Blanc",
        image: reebokClassicLeatherBlanc,
        est_principale: 1,
        tailles: [
          {
            taille: "37",
            stock: 14,
          },
          {
            taille: "38",
            stock: 18,
          },
          {
            taille: "39",
            stock: 12,
          },
          {
            taille: "40",
            stock: 8,
          },
          {
            taille: "41",
            stock: 5,
          },
        ],
      },
      {
        id: 10,
        shoe_id: 6,
        nom: "Noir",
        image: reebokClassicLeatherNoir,
        est_principale: 0,
        tailles: [
          {
            taille: "37",
            stock: 12,
          },
          {
            taille: "38",
            stock: 16,
          },
          {
            taille: "39",
            stock: 10,
          },
        ],
      },
    ],
  },
];

export const panier = [];
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar panierLength={panier.length} />
        {/* <Banner /> */}
        {/* <Filter /> */}
        <Product products={chaussures} />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:productId",
    element: (
      <div>
        <Navbar />
        {/* <Filter /> */}
        <ShoesDetails />
      </div>
    ),
  },
  {
    path:"/cart",
    element :
    (
      <div>
        <Navbar />
        <Cart />
      </div>
    ),
  }
  ,
  {
    path:"/heart",
    element :
    (
      <div>
        <Navbar />
        <Heart />
      </div>
    ),
  }
]);
function App() {
  return (
    <CartProvider>
      <HeartProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </HeartProvider>
    </CartProvider>
  );
}

export default App;
