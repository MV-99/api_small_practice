import { useEffect, useState } from "react";
import axios from "axios"; //lo que instale

//el cuerpo del personaje
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

//consultar como funciona esto...????
//como funcionan los end::::::?
//como se estructura la peticion??
//como se da el uso del use y fetch

const RandomCharacter = () => {
  //funcion madre
  //constantes de trabajo
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  //  obtener un personaje aleatorio
  const fetchRandomCharacter = async () => {
    setLoading(true);
    //funcion try
    try {
      // endpoint de personajes  los de la page 1
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character" //url api
      );
      const characters = response.data.results;

      //personaje aleatorio entre los primeros 20
      const randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      setCharacter(randomCharacter);
    } catch (error) {
      console.error("Error fetching character:", error);
      setCharacter(null);
    } finally {
      setLoading(false);
    }
  };

  // useEffect se ejecuta al montar el componente
  useEffect(() => {
    fetchRandomCharacter();
  }, []);
  //sms de carga de la pagina
  if (loading) return <div>Loading character...</div>;
  if (!character) return <div>No character found.</div>;

  return (
    <div style={{ textAlign: "center", paddingLeft: "450px" }}>
      <h1>Rick and Morty Random Character</h1>
      <h2 style={{ color: "#575FB5" }}>{character.name}</h2>
      <img src={character.image} alt={character.name} width={200} />
      <p style={{ fontSize: "20px" }}>
        <a style={{ color: "#575FB5", fontWeight: "bold" }}>Status:</a>{" "}
        {character.status}
      </p>
      <p style={{ fontSize: "20px" }}>
        <a style={{ color: "#575FB5", fontWeight: "bold" }}>Species:</a>{" "}
        {character.species}
      </p>
      <p style={{ fontSize: "20px" }}>
        <a style={{ color: "#575FB5", fontWeight: "bold" }}>Gender:</a>{" "}
        {character.gender}
      </p>
      <button
        onClick={fetchRandomCharacter}
        style={{
          marginTop: "10px",
          padding: "9px 20px",
          border: "none",
          borderColor: "none",
          outline: "none",
          color: "white",
          backgroundColor: "#575FB5",
          borderRadius: "40px",
        }}
      >
        Change
      </button>
    </div>
  );
};

export default RandomCharacter;
