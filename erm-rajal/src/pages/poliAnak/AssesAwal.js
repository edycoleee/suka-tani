import React, { useState } from "react";
import nyeri from "../../asset/nyeri.jpg";
const DummyDataAnak = {
  f_noTransaksi: "BRJ-TR210403-001",
  f_nmPoli: "POLIKLINIK ANAK",
  f_rekamMedis: ["029591", "NUR INDAH W, SE, NY", "BY.NY"],
};
const DummyAwalAnak = {
  f_sumberData: ["ORANGTUA", "PASIEN", "LAINNYA"],
  f_tknDarah: 0,
  f_frekNafas: 0,
  f_frekNadi: 0,
  f_suhuTubuh: 0,
  f_beratBadan: 0,
  f_tinggiBadan: 0,
  f_linkKepala: 0,
  f_gizi: ["BAIK", "BURUK", "KURANG", "OVERWEIGHT"],
  f_BBU: 0,
  f_PBU: 0,
  f_BBPB: 0,
  f_imt: 0,
  f_bcg: ["TIDAK", "SUDAH"],
  f_dpt: ["TIDAK", "I", "II", "III", "IV"],
  f_campak: ["TIDAK", "I", "II", "III"],
  f_hepatitisb: ["TIDAK", "I", "II", "III"],
  f_polio: ["TIDAK", "I", "II", "III", "IV"],
  f_imunLain: "",
  f_skalaNyeri: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  f_penyKongenital: "",
  f_tumbuh: ["SESUAI UMUR", "TIDAK SESUAI"],
  f_gangguanTumbuh: "",
  f_fungGangKetBab: "",
  f_fungGangStatBab: "",
  f_fungGangBak: ["TIDAK ADA", "RETENSI URIN", "INKONTINESIA URIN"],
  f_fungResJatuh: ["TIDAK BERISIKO", "SEMPOYONGAN", "ALAT BANTU"],
  f_ekonomi: "",
  f_ekoPekerjaan: "",
  f_ekoPendapatan: [">3JT", "<1JT", "1-3JT"],
  f_riwGpa: "",
  f_riwKetuban: ["<6JAM", ">=6JAM"],
  f_riwIbu: ["TIDAK", "SAKIT"],
  f_riwLahir: ["SPONTAN", "TINDAKAN"],
  f_riwBBLahir: 0,
  f_riwPBLahir: 0,
  f_riwLKLahir: 0,
  f_tbKontak: 0,
  f_tbUji: 0,
  f_tbGizi: 0,
  f_tbDemam: 0,
  f_tbBatuk: 0,
  f_tbKGB: 0,
  f_tbTulang: 0,
  f_tbRontgen: 0,
};

function AssesAwal() {
  const { f_noTransaksi, f_nmPoli, f_rekamMedis } = DummyDataAnak;
  const [a_sumberData, setSumberData] = useState("ORANGTUA");
  const [a_tknDarah, setTknDarah] = useState(0);
  const [a_frekNafas, setFrekNafas] = useState(0);
  const [a_frekNadi, setFrekNadi] = useState(0);
  const [a_suhuTubuh, setSuhuTubuh] = useState(0);
  const [a_beratBadan, setBeratBadan] = useState(0);
  const [a_tinggiBadan, setTinggiBadan] = useState(0);
  const [a_linkKepala, setLinkKepala] = useState(0);
  const [a_gizi, setGizi] = useState("BAIK");
  const [a_BBU, setBBU] = useState(0);
  const [a_PBU, setPBU] = useState(0);
  const [a_BBPB, setBBPB] = useState(0);
  const [a_imt, setImt] = useState(0);
  const [a_bcg, setBcg] = useState("TIDAK");
  const [a_dpt, setDpt] = useState("TIDAK");
  const [a_campak, setCampak] = useState("TIDAK");
  const [a_hepatitisb, setHepatitisb] = useState("TIDAK");
  const [a_polio, setPolio] = useState("TIDAK");
  const [a_imunLain, setImunLain] = useState("");
  const [a_skalaNyeri, setSkalaNyeri] = useState("0");
  const [a_penyKongenital, setPenyKongenital] = useState("");
  const [a_tumbuh, setTumbuh] = useState("SESUAI UMUR");
  const [a_gangguanTumbuh, setGangguanTumbuh] = useState("");
  const [a_fungGangKetBab, setFungGangKetBab] = useState("");
  const [a_fungGangStatBab, setFungGangStatBab] = useState("");
  const [a_fungGangBak, setFungGangBak] = useState("TIDAK ADA");
  const [a_fungResJatuh, setFungResJatuh] = useState("TIDAK BERISIKO");
  const [a_ekonomi, setEkonomi] = useState("");
  const [a_ekoPekerjaan, setEkoPekerjaan] = useState("");
  const [a_ekoPendapatan, setEkoPendapatan] = useState(">3JT");
  const [a_riwGpa, setRiwGpa] = useState("");
  const [a_riwKetuban, setRiwKetuban] = useState("<6JAM");
  const [a_riwIbu, setRiwIbu] = useState("TIDAK");
  const [a_riwLahir, setRiwLahir] = useState("SPONTAN");
  const [a_riwBBLahir, setRiwBBLahir] = useState(0);
  const [a_riwPBLahir, setRiwPBLahir] = useState(0);
  const [a_riwLKLahir, setRiwLKLahir] = useState(0);
  const [a_tbKontak, setTbKontak] = useState(0);
  const [a_tbUji, setTbUji] = useState(0);
  const [a_tbGizi, setTbGizi] = useState(0);
  const [a_tbDemam, setTbDemam] = useState(0);
  const [a_tbBatuk, setTbBatuk] = useState(0);
  const [a_tbKGB, setTbKGB] = useState(0);
  const [a_tbTulang, setTbTulang] = useState(0);
  const [a_tbRontgen, setTbRontgen] = useState(0);

  function onSimpanData() {
    if (a_tknDarah === "") return console.log("ISILAH DENGAN ANGKA / 0");
    const NewData = {
      f_noTransaksi,
      f_nmPoli,
      f_rekamMedis,
      a_sumberData,
      a_tknDarah,
      a_frekNafas,
      a_frekNadi,
      a_suhuTubuh,
      a_beratBadan,
      a_tinggiBadan,
      a_linkKepala,
      a_gizi,
    };
    console.log("Simpan Data", NewData);
  }

  return (
    <div>
      <h3>Asessmen Keperawatan Poli Anak</h3>
      <fieldset>
        <legend>Data Pasien :</legend>
        <label htmlFor="n_noTransaksi">NO TRANSAKSI :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="text"
          name="n_noTransaksi"
          value={f_noTransaksi}
          disabled
        />
        <br />
        <label htmlFor="n_nmPoli">POLI :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="text"
          name="n_nmPoli"
          value={f_nmPoli}
          disabled
        />
        <br />
        <label htmlFor="n_nmPoli">REKAM MEDIS :</label>
        <input
          style={{ marginLeft: "1em", width: "300px" }}
          type="text"
          name="n_nmPoli"
          value={f_rekamMedis}
          disabled
        />
        <br />
      </fieldset>
      <br />
      <fieldset>
        <legend>Asessmen Umum :</legend>
        <label>SUMBER DATA * : </label>
        <input
          type="radio"
          id="PASIEN"
          name="a_sumberData"
          value="PASIEN"
          checked={a_sumberData === "PASIEN" ? true : false}
          onChange={() => setSumberData("PASIEN")}
        />
        <label htmlFor="PASIEN">PASIEN</label>
        <input
          type="radio"
          id="ORANGTUA"
          name="a_sumberData"
          value="ORANGTUA"
          checked={a_sumberData === "ORANGTUA" ? true : false}
          onChange={() => setSumberData("ORANGTUA")}
        />
        <label htmlFor="ORANGTUA">ORANG TUA</label>
        <input
          type="radio"
          id="LAINNYA"
          name="a_sumberData"
          value="LAINNYA"
          checked={a_sumberData === "LAINNYA" ? true : false}
          onChange={() => setSumberData("LAINNYA")}
        />
        <label htmlFor="LAINNYA">LAINNYA</label>
        <br />
        <label htmlFor="n_tknDarah">TEKANAN DARAH * :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_tknDarah"
          placeholder="TEKANAN DARAH"
          value={a_tknDarah}
          onChange={(e) => setTknDarah(e.target.value)}
        />
        {"mmHg"}
        <br />
        <label htmlFor="a_frekNafas">FREKUENSI NAFAS * :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_frekNafas"
          placeholder="FREKUENSI NAFAS"
          value={a_frekNafas}
          onChange={(e) => setFrekNafas(e.target.value)}
        />
        {"x/menit"}
        <br />
        <label htmlFor="a_frekNadi">FREKUENSI NADI * :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_frekNadi"
          placeholder="FREKUENSI NADI"
          value={a_frekNadi}
          onChange={(e) => setFrekNadi(e.target.value)}
        />
        {"x/menit"}
        <br />
        <label htmlFor="a_suhuTubuh">SUHU TUBUH * :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_suhuTubuh"
          placeholder="SUHU TUBUH"
          value={a_suhuTubuh}
          onChange={(e) => setSuhuTubuh(e.target.value)}
        />
        {"C"}
        <br />
        <label htmlFor="a_beratBadan">BERAT BADAN * :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_beratBadan"
          placeholder="BERAT BADAN"
          value={a_beratBadan}
          onChange={(e) => setBeratBadan(e.target.value)}
        />
        {"Kg"}
        <br />
        <label htmlFor="a_tinggiBadan">TINGGI BADAN * :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_tinggiBadan"
          placeholder="PANJANG BADAN"
          value={a_tinggiBadan}
          onChange={(e) => setTinggiBadan(e.target.value)}
        />
        {"Cm"}
        <br />
        <label htmlFor="a_linkKepala">LINKAR KEPALA * :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_linkKepala"
          placeholder="LINKAR KEPALA"
          value={a_linkKepala}
          onChange={(e) => setLinkKepala(e.target.value)}
        />
        {"Cm"}
        <br />
        <label>GIZI * : </label>
        <input
          type="radio"
          id="gBAIK"
          name="a_gizi"
          value="BAIK"
          checked={a_gizi === "BAIK" ? true : false}
          onChange={() => setGizi("BAIK")}
        />
        <label htmlFor="gBAIK">BAIK</label>
        <input
          type="radio"
          id="BURUK"
          name="a_gizi"
          value="BURUK"
          checked={a_gizi === "BURUK" ? true : false}
          onChange={() => setGizi("BURUK")}
        />
        <label htmlFor="gBURUK">BURUK</label>
        <input
          type="radio"
          id="gKURANG"
          name="a_gizi"
          value="KURANG"
          checked={a_gizi === "KURANG" ? true : false}
          onChange={() => setGizi("KURANG")}
        />
        <label htmlFor="gKURANG">KURANG</label>
        <input
          type="radio"
          id="gOVERWEIGHT"
          name="a_gizi"
          value="OVERWEIGHT"
          checked={a_gizi === "OVERWEIGHT" ? true : false}
          onChange={() => setGizi("OVERWEIGHT")}
        />
        <label htmlFor="gOVERWEIGHT">OVERWEIGHT</label>
        <br />
        <label htmlFor="a_BBU">BB/U :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_BBU"
          value={a_BBU}
          onChange={(e) => setBBU(e.target.value)}
        />
        {""}
        <br />
        <label htmlFor="a_PBU">PBU :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_PBU"
          value={a_PBU}
          onChange={(e) => setPBU(e.target.value)}
        />
        {""}
        <br />
        <label htmlFor="a_BBPB">BBPB :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_BBPB"
          value={a_BBPB}
          onChange={(e) => setBBPB(e.target.value)}
        />
        {""}
        <br />
        <label htmlFor="a_imt">imt :</label>
        <input
          style={{ marginLeft: "1em" }}
          type="number"
          name="a_imt"
          value={a_imt}
          onChange={(e) => setImt(e.target.value)}
        />
        {""}
        <br />
      </fieldset>
      <br />
      <fieldset>
        <legend>Imunisasi :</legend>
        <label>BCG : </label>
        <input
          type="radio"
          id="bTIDAK"
          name="a_bcg"
          value="TIDAK"
          checked={a_bcg === "TIDAK" ? true : false}
          onChange={() => setBcg("TIDAK")}
        />
        <label htmlFor="bTIDAK">TIDAK</label>
        <input
          type="radio"
          id="bSUDAH"
          name="a_bcg"
          value="SUDAH"
          checked={a_bcg === "SUDAH" ? true : false}
          onChange={() => setBcg("SUDAH")}
        />
        <label htmlFor="bSUDAH">SUDAH</label>
        <br />
        <label>DPT : </label>
        <input
          type="radio"
          id="bTIDAK"
          name="a_dpt"
          value="TIDAK"
          checked={a_dpt === "TIDAK" ? true : false}
          onChange={() => setDpt("TIDAK")}
        />
        <label htmlFor="bTIDAK">TIDAK</label>
        <input
          type="radio"
          id="bI"
          name="a_dpt"
          value="I"
          checked={a_dpt === "I" ? true : false}
          onChange={() => setDpt("I")}
        />
        <label htmlFor="bI">I</label>
        <input
          type="radio"
          id="bII"
          name="a_dpt"
          value="II"
          checked={a_dpt === "II" ? true : false}
          onChange={() => setDpt("II")}
        />
        <label htmlFor="bII">II</label>
        <input
          type="radio"
          id="bIIII"
          name="a_dpt"
          value="IIII"
          checked={a_dpt === "IIII" ? true : false}
          onChange={() => setDpt("IIII")}
        />
        <label htmlFor="bIIII">IIII</label>
        <input
          type="radio"
          id="bIV"
          name="a_dpt"
          value="IV"
          checked={a_dpt === "IV" ? true : false}
          onChange={() => setDpt("IV")}
        />
        <label htmlFor="bIV">IV</label>
        <br />
        <label>CAMPAK : </label>
        <input
          type="radio"
          id="bTIDAK"
          name="a_dpt"
          value="TIDAK"
          checked={a_dpt === "TIDAK" ? true : false}
          onChange={() => setDpt("TIDAK")}
        />
        <label htmlFor="bTIDAK">TIDAK</label>
        <input
          type="radio"
          id="bI"
          name="a_dpt"
          value="I"
          checked={a_dpt === "I" ? true : false}
          onChange={() => setDpt("I")}
        />
        <label htmlFor="bI">I</label>
        <input
          type="radio"
          id="bII"
          name="a_dpt"
          value="II"
          checked={a_dpt === "II" ? true : false}
          onChange={() => setDpt("II")}
        />
        <label htmlFor="bII">II</label>
        <input
          type="radio"
          id="bIIII"
          name="a_dpt"
          value="IIII"
          checked={a_dpt === "IIII" ? true : false}
          onChange={() => setDpt("IIII")}
        />
        <label htmlFor="bIIII">IIII</label>
        <br />
        <label>HEPATITIS B : </label>
        <input
          type="radio"
          id="bTIDAK"
          name="a_dpt"
          value="TIDAK"
          checked={a_dpt === "TIDAK" ? true : false}
          onChange={() => setDpt("TIDAK")}
        />
        <label htmlFor="bTIDAK">TIDAK</label>
        <input
          type="radio"
          id="bI"
          name="a_dpt"
          value="I"
          checked={a_dpt === "I" ? true : false}
          onChange={() => setDpt("I")}
        />
        <label htmlFor="bI">I</label>
        <input
          type="radio"
          id="bII"
          name="a_dpt"
          value="II"
          checked={a_dpt === "II" ? true : false}
          onChange={() => setDpt("II")}
        />
        <label htmlFor="bII">II</label>
        <input
          type="radio"
          id="bIIII"
          name="a_dpt"
          value="IIII"
          checked={a_dpt === "IIII" ? true : false}
          onChange={() => setDpt("IIII")}
        />
        <label htmlFor="bIIII">IIII</label>
        <br />
        <label>POLIO : </label>
        <input
          type="radio"
          id="bTIDAK"
          name="a_dpt"
          value="TIDAK"
          checked={a_dpt === "TIDAK" ? true : false}
          onChange={() => setDpt("TIDAK")}
        />
        <label htmlFor="bTIDAK">TIDAK</label>
        <input
          type="radio"
          id="bI"
          name="a_dpt"
          value="I"
          checked={a_dpt === "I" ? true : false}
          onChange={() => setDpt("I")}
        />
        <label htmlFor="bI">I</label>
        <input
          type="radio"
          id="bII"
          name="a_dpt"
          value="II"
          checked={a_dpt === "II" ? true : false}
          onChange={() => setDpt("II")}
        />
        <label htmlFor="bII">II</label>
        <input
          type="radio"
          id="bIIII"
          name="a_dpt"
          value="IIII"
          checked={a_dpt === "IIII" ? true : false}
          onChange={() => setDpt("IIII")}
        />
        <label htmlFor="bIIII">IIII</label>
        <input
          type="radio"
          id="bIV"
          name="a_dpt"
          value="IV"
          checked={a_dpt === "IV" ? true : false}
          onChange={() => setDpt("IV")}
        />
        <label htmlFor="bIV">IV</label>
        <br />
        <label htmlFor="a_imunLain">IMUNISASI LAIN :</label>
        <textarea
          id="a_imunLain"
          name="a_imunLain"
          rows="2"
          cols="30"
          placeholder="IMUNISASI LAIN"
          onChange={(e) => setImunLain(e.target.value)}
          value={a_imunLain || ""}
        />
      </fieldset>
      <br />
      <fieldset>
        <legend>Skrining Nyeri :</legend>
        <img src={nyeri} alt="Nyeri" />
        <br />
        <label>SKALA NYERI : </label>
        <input
          type="radio"
          id="b0"
          name="a_skalaNyeri"
          value="0"
          checked={a_skalaNyeri === "0" ? true : false}
          onChange={() => setSkalaNyeri("0")}
        />
        <label htmlFor="b0">0</label>
        <input
          type="radio"
          id="bI"
          name="a_dpt"
          value="I"
          checked={a_dpt === "I" ? true : false}
          onChange={() => setDpt("I")}
        />
        <label htmlFor="bI">I</label>
        <input
          type="radio"
          id="bII"
          name="a_dpt"
          value="II"
          checked={a_dpt === "II" ? true : false}
          onChange={() => setDpt("II")}
        />
        <label htmlFor="bII">II</label>
        <input
          type="radio"
          id="bIIII"
          name="a_dpt"
          value="IIII"
          checked={a_dpt === "IIII" ? true : false}
          onChange={() => setDpt("IIII")}
        />
        <label htmlFor="bIIII">IIII</label>
        <input
          type="radio"
          id="bIV"
          name="a_dpt"
          value="IV"
          checked={a_dpt === "IV" ? true : false}
          onChange={() => setDpt("IV")}
        />
        <label htmlFor="bIV">IV</label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Fungsional :</legend>
      </fieldset>
      <br />
      <fieldset>
        <legend>Ekonomi Sosial :</legend>
      </fieldset>
      <br />
      <fieldset>
        <legend>Riwayat Kelahiran :</legend>
      </fieldset>
      <br />
      <fieldset>
        <legend>Skrining TB :</legend>
      </fieldset>
      <br />
      <fieldset>
        <legend>Action :</legend>
        <button onClick={() => onSimpanData()}>SIMPAN DATA</button>
      </fieldset>
    </div>
  );
}

export default AssesAwal;
