import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";
import AsessUlang from "./AsessUlang";
//import AssesAwal from "./AssesAwal";

const DummyDataAnak = {
  f_noTransaksi: "BRJ-TR210403-001",
  f_nmPoli: "POLIKLINIK ANAK",
  f_rekamMedis: ["029591", "NUR INDAH W, SE, NY", "BY.NY"],
};

function Index() {
  const { f_noTransaksi, f_nmPoli, f_rekamMedis } = DummyDataAnak;
  return (
    <div>
      <AppBar position="absolute" color="default" position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            POLI ANAK
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      {/* <AssesAwal /> */}
      <Container maxWidth="md">
        <fieldset>
          <Link to="/">Home</Link>
        </fieldset>
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
        <AsessUlang />
      </Container>
    </div>
  );
}

export default Index;
