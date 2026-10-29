import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UrheilijaContext from "../context/UrheilijaContext";

const Urheilijatieto = ({ urheilija }) => {
  const { deleteAthlete } = useContext(UrheilijaContext);
  const [naytaTiedot, setNaytaTiedot] = useState(false);

  const {
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuva_url,
    laji,
    saavutukset,
  } = urheilija;

  const onShowClick = () => setNaytaTiedot(!naytaTiedot);
  const onDeleteClick = () => deleteAthlete(id);

  return (
    <div className="card card-body mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">
          {etunimi} {sukunimi}{" "}
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={onShowClick}
          >
            {naytaTiedot ? "▲" : "▼"}
          </button>
        </h4>

        <div className="btn-group" role="group">
          <Link className="btn btn-primary btn-sm" to={`/muokkaa/${id}`}>
            Muokkaa
          </Link>
          <button className="btn btn-danger btn-sm" onClick={onDeleteClick}>
            Poista
          </button>
        </div>
      </div>

      {naytaTiedot && (
        <ul className="list-group list-group-flush mt-3">
          {kuva_url && (
            <li className="list-group-item">
              <img src={kuva_url} alt={sukunimi} style={{ maxHeight: 200 }} />
            </li>
          )}
          <li className="list-group-item">Kutsumanimi: {kutsumanimi}</li>
          <li className="list-group-item">
            Syntymäaika: {syntymavuosi ? syntymavuosi.slice(0, 10) : "-"}
          </li>
          <li className="list-group-item">Paino: {paino} kg</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
        </ul>
      )}
    </div>
  );
};

Urheilijatieto.propTypes = {
  urheilija: PropTypes.shape({
    id: PropTypes.number.isRequired,
    etunimi: PropTypes.string.isRequired,
    sukunimi: PropTypes.string.isRequired,
    kutsumanimi: PropTypes.string,
    syntymavuosi: PropTypes.string,
    paino: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    kuva_url: PropTypes.string,
    laji: PropTypes.string,
    saavutukset: PropTypes.string,
  }).isRequired,
};

export default Urheilijatieto;