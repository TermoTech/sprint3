const express = require("express");
const router = express.Router();

router.get("/simulador", (req, res) => {
    res.render("siteInstitucional/simulador");
})

module.exports = router;