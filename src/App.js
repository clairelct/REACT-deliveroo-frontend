import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Category from "./components/Category";
import Cart from "./components/Cart";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/Deliveroo_logo.png";
import headerImg from "./assets/header-image.jpg";
library.add(faStar, faMinus, faPlus);

function App() {
  // states data
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //states ajouter menu au panier, au clic
  const [listMeals, setListMeals] = useState([]);

  // Récupération des données
  const fetchData = async () => {
    try {
      const response = await axios.get("https://cl-deliveroo.herokuapp.com/");
      // stocker la response dans un state
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Charging...</span>
  ) : (
    <span>
      <Header logo={logo} headerImg={headerImg} data={data} />
      <main>
        <div className="container">
          <div className="list-container">
            <Category
              data={data}
              listMeals={listMeals}
              setListMeals={setListMeals}
            />
          </div>
          <div className="aside-container">
            <Cart
              listMeals={listMeals}
              listMeals={listMeals}
              setListMeals={setListMeals}
            />
          </div>
        </div>
      </main>
    </span>
  );
}

export default App;
