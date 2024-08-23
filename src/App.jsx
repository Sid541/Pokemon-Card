import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemonList(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );




  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            value={searchTerm || ''}
            onChange={searchHandler}
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:bg-blue-600">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {filteredPokemonList.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
          
        ))}
      </div>
    </>
  );
}

export default App;
