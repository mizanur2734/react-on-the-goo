import { Suspense } from "react";
import "./App.css";
import Countries from "./countries/Countries/Countries";

function App() {
  const countriesPromise = fetch(
    "https://openapi.programming-hero.com/api/all",
  ).then((res) => res.json());
  return (
    <>
      <Suspense fallback={<h3>Nadir loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
