import { useContext, useEffect } from "react";
import UrheilijaContext from "../context/UrheilijaContext";
import Urheilijatieto from "./Urheilijatiedot"; // kortti

const UrheilijaLista = () => {
  const { athletes, getAthletes } = useContext(UrheilijaContext);

  useEffect(() => {
    getAthletes();
  }, []);

  return (
    <>
      <h1 className="display-4 mb-3">
        <span className="text-danger">Urheilijat</span>
      </h1>
      {athletes.length ? (
        athletes.map((urheilija) => (
          <Urheilijatieto key={urheilija.id} urheilija={urheilija} />
        ))
      ) : (
        <p className="text-muted">Ei urheilijoita.</p>
      )}
    </>
  );
};

export default UrheilijaLista;