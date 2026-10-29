import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UrheilijaContext from "../context/UrheilijaContext";

export default function LisaaUrheilija() {
  const navigate = useNavigate();
  const { addAthlete } = useContext(UrheilijaContext);

  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [kuvaUrl, setKuvaUrl] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uusiUrheilija = {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva_url: kuvaUrl,
      laji,
      saavutukset,
    };

    await addAthlete(uusiUrheilija);
    navigate("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilija</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="etunimi" className="form-label">Etunimi</label>
              <input
                id="etunimi"
                type="text"
                className="form-control"
                placeholder="Syötä etunimi..."
                value={etunimi}
                onChange={(e) => setEtunimi(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="sukunimi" className="form-label">Sukunimi</label>
              <input
                id="sukunimi"
                type="text"
                className="form-control"
                placeholder="Syötä sukunimi..."
                value={sukunimi}
                onChange={(e) => setSukunimi(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="kutsumanimi" className="form-label">Kutsumanimi</label>
              <input
                id="kutsumanimi"
                type="text"
                className="form-control"
                value={kutsumanimi}
                onChange={(e) => setKutsumanimi(e.target.value)}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="syntymavuosi" className="form-label">Syntymäaika</label>
              <input
                id="syntymavuosi"
                type="date"
                className="form-control"
                value={syntymavuosi}
                onChange={(e) => setSyntymavuosi(e.target.value)}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="paino" className="form-label">Paino (kg)</label>
              <input
                id="paino"
                type="number"
                step="0.1"
                className="form-control"
                value={paino}
                onChange={(e) => setPaino(e.target.value)}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="laji" className="form-label">Laji</label>
              <input
                id="laji"
                type="text"
                className="form-control"
                value={laji}
                onChange={(e) => setLaji(e.target.value)}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="kuva" className="form-label">Kuvan URL</label>
              <input
                id="kuva"
                type="text"
                className="form-control"
                placeholder="https://..."
                value={kuvaUrl}
                onChange={(e) => setKuvaUrl(e.target.value)}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="saavutukset" className="form-label">Saavutukset</label>
              <textarea
                id="saavutukset"
                rows="3"
                className="form-control"
                value={saavutukset}
                onChange={(e) => setSaavutukset(e.target.value)}
              />
            </div>
          </div>

          <input type="submit" value="Lisää urheilija" className="btn btn-success" />
        </form>
      </div>
    </div>
  );
}