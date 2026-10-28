const db = require("../config/db");

class Urheilija {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuva_url,
    laji,
    saavutukset,
  ) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
    this.paino = paino;
    this.kuva_url = kuva_url;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  async save() {
    const sql = `INSERT INTO urheilija(etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva_url, laji, saavutukset)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await db.execute(sql, [
      this.etunimi,
      this.sukunimi,
      this.kutsumanimi,
      this.syntymavuosi,
      this.paino,
      this.kuva_url,
      this.laji,
      this.saavutukset,
    ]);
    return result;
  }

  // haetaan kaikki urheilijat
  static getAll() {
    return db.execute("SELECT * FROM urheilija");
  }

  // haetaan urheilija id:n perusteella
  static findById(id) {
    return db.execute("SELECT * FROM urheilija WHERE id = ?", [id]);
  }

  // muokataan urheilijan tietoja id:n perusteella
  static editById(id, u) {
    const sql = `UPDATE urheilija SET
      etunimi = ?, sukunimi = ?, kutsumanimi = ?, syntymavuosi = ?,
      paino = ?, kuva_url = ?, laji = ?, saavutukset = ?
      WHERE id = ?`;
    return db.execute(sql, [
      u.etunimi,
      u.sukunimi,
      u.kutsumanimi,
      u.syntymavuosi,
      u.paino,
      u.kuva_url,
      u.laji,
      u.saavutukset,
      id,
    ]);
  }

  // poistetaan urheilija id:n perusteella
  static deleteById(id) {
    return db.execute("DELETE FROM urheilija WHERE id = ?", [id]);
  }
}

module.exports = Urheilija;
