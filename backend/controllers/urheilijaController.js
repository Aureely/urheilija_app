const Urheilija = require("../models/urheilijaModel");

exports.getAllAthletes = async (req, res) => {
  try {
    const [urheilijat] = await Urheilija.getAll();
    res.status(200).json(urheilijat);
  } catch (error) {
    res.status(500).json({ virhe: error.message });
  }
};

exports.getAthleteById = async (req, res) => {
  try {
    const urheilijaId = Number(req.params.id);
    const [urheilija] = await Urheilija.findById(urheilijaId);
    if (urheilija.length === 0)
      return res.status(404).json({ virhe: "Ei löytynyt" });
    res.json(urheilija[0]); // palauttaa yksittäisen urheilijan
  } catch (error) {
    res.status(500).json({ virhe: error.message });
  }
};

exports.createAthlete = async (req, res) => {
  try {
    const {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva_url,
      laji,
      saavutukset,
    } = req.body;
    if (!etunimi || !sukunimi) {
      return res
        .status(400)
        .json({ virhe: "Etunimi ja sukunimi ovat pakolliset" });
    }
    const urheilija = new Urheilija(
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva_url,
      laji,
      saavutukset,
    );
    const result = await urheilija.save();
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ virhe: error.message });
  }
};

exports.updateAthlete = async (req, res) => {
  try {
    const [result] = await Urheilija.editById(req.params.id, req.body);
    if (result.affectedRows === 0)
      return res.status(404).json({ virhe: "Ei löytynyt" }); // affectedRows kertoo kuinka monta tietokannan riviä kysely muutti
    res.json({ id: Number(req.params.id), ...req.body }); // "..." on spread-operaattori, joka purkaa olion kentät. tässä siis lisätään id parametrista + muut tiedot perään
  } catch (error) {
    res.status(500).json({ virhe: error.message });
  }
};

exports.removeAthlete = async (req, res) => {
  try {
    const [result] = await Urheilija.deleteById(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).json({ virhe: "Ei löytynyt" });
    res.status(204).end(); // .end() lopettaa vastauksen ilman sisältöä
  } catch (error) {
    res.status(500).json({ virhe: error.message });
  }
};
