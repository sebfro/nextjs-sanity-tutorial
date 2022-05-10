import React from "react";
import { Pet } from "../types/SchemaTypes";
import { GetStaticProps } from "next";
import { fetchAllByType } from "./api/client";

interface HomeProps {
  pets: Pet[];
}

export const getStaticProps: GetStaticProps = async () => {
  const pets: Pet[] = await fetchAllByType<Pet[]>("pet");
  return {
    props: {
      pets,
    },
  };
};

const text =
  "Your data will show up here when you've configured everything correctly";

const Home: React.FC<HomeProps> = ({ pets }) => {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Pets</h2>
        {pets.length > 0 && (
          <ul>
            {pets.map((pet) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {pets.length === 0 && <p>No pets to show</p>}
        {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )}
        {pets.length === 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>{text}</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
