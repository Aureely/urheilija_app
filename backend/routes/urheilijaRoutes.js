const express = require("express");
const controller = require("../controllers/urheilijaController");

const router = express.Router();

router.get("/", controller.getAllAthletes);
router.get("/:id", controller.getAthleteById);
router.post("/", controller.createAthlete);
router.put("/:id", controller.updateAthlete);
router.delete("/:id", controller.removeAthlete);

module.exports = router;