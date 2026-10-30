import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import urheilijaContext from "../context/UrheilijaContext";


const MuokkaaUrheilija = () => {
  
    const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [kuvaUrl, setKuvaUrl] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
    

  const UrheilijaContext = useContext(urheilijaContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
  UrheilijaContext.getAthlete(id).then((res) => {
    if (!res) return;
    setEtunimi(res.etunimi ?? "");
    setSukunimi(res.sukunimi ?? "");
    setKutsumanimi(res.kutsumanimi ?? "");
    setSyntymavuosi(res.syntymavuosi ? res.syntymavuosi.slice(0, 10) : "");
    setPaino(res.paino ?? "");
    setKuvaUrl(res.kuva_url ?? "");
    setLaji(res.laji ?? "");
    setSaavutukset(res.saavutukset ?? "");
  });
}, [id]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const paivitettyUrheilija = {
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuva_url: kuvaUrl,
    laji,
    saavutukset,
  };

  await UrheilijaContext.setAthlete(Number(id), paivitettyUrheilija);
  history("/");
};
  const onChangeEtunimi = (e) => {
    setEtunimi(e.target.value);
  };
  const onChangeSukunimi = (e) => {
    setSukunimi(e.target.value);
  };
  const onChangeKutsumanimi = (e) => {
    setKutsumanimi(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeKuva_Url = (e) => {
    setKuvaUrl(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };
  return (

    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijaa</div>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              type="text"
              name="etunimi"
              id="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä etunimi..."
              value={etunimi}
              onChange={onChangeEtunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              type="text"
              name="sukunimi"
              id="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={onChangeSukunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              type="text"
              name="kutsumanimi"
              id="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={onChangeKutsumanimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
                type="date"
                 name="syntymavuosi"
                id="syntymavuosi"
                 className="form-control form-control-lg"
                 value={syntymavuosi}
                 onChange={onChangeSyntymavuosi}
                />
          </div>
          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              type="text"
              name="paino"
              id="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kuvaUrl">Kuvan URL</label>
            <input
              type="text"
              name="kuvaUrl"
              id="kuvaUrl"
              className="form-control form-control-lg"
              placeholder="Syötä kuvan URL..."
              value={kuvaUrl}
              onChange={onChangeKuva_Url}
            />
          </div>
          <div className="form-group">
            <label htmlFor="laji">Laji</label>
            <input
              type="text"
              name="laji"
              id="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>
          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              id="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>
          <br />
          <input type="submit" value="Muokkaa tietoja" className="btn btn-success" />
        </form>
      </div>
    </div>
  )
    
  };

  export default MuokkaaUrheilija;