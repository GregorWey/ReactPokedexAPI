
import { useEffect, useState } from 'react';

function Home() {

    const [pokemons,setPokemons]= useState([]);

  useEffect(()=>{
    getPokemons();
  },[])

  async function getPokemons(){
    try{
      const api = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await api.json();
      setPokemons(data.results);
      console.log(data.results);
    }
    catch{
      alert("Não foi possível buscar os pokemons");
    }
  }
  return (
    <div>
      {pokemons.map((pokemon,index) => {
        return (
          <div key={index}>
            <p>{index}</p>
            <p>{pokemon.name}</p>
          </div>
        );
      })};
    </div>
  )
}

export default Home