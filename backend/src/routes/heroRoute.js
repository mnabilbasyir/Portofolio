const express = require("express");
const router = express.Router();

router.get("/api/hero", (req, res) => {
  res.json({
    nama: "Muhammad Nabil Basyir",
    peran: "Backend Developer",
    deskripsi: "Saya adalah siswa XII RPL 1 yang sedang belajar membuat aplikasi web menggunakan Express.js"
  });
});

module.exports = router;