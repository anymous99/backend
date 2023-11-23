const router = require("express").Router();
const {
  createResistance,
  getResistanceById,
  updateResistance,
  deleteResistance,
} = require("../../controllers/resistance-controller");

const {
  createCardio,
  getCardioById,
  updateCardio,
  deleteCardio,
} = require("../../controllers/cardio-controller");

// import middleware
const { authMiddleware } = require('../../utils/auth');

// on insominia: 
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
router.use(authMiddleware);

// /api/exercise/cardio
router.route("/cardio").post(createCardio);

// Update Cardio by id
router.put("/cardio/:id", updateCardio);

// /api/exercise/cardio/:id
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/exercise/resistance
router.route("/resistance").post(createResistance);

// Update resistance by id
router.put("/resistance/:id", updateResistance);

// /api/exercise/resistance/:id
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

module.exports = router;
