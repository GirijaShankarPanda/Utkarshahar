import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  donationController,
  getDonationsController,
  getDonationsControlleradmin,
  updateDonationStatusController,
} from "../controllers/donationController.js";
//router object
const router = express.Router();

//routing
router.post("/register", registerController);
//LOGIN || POST
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//Donation routes
router.post("/donation", requireSignIn, donationController);
router.get("/donations", requireSignIn, getDonationsController);
router.get("/admindonations", requireSignIn, getDonationsControlleradmin);
router.patch("/admindonations/:id", updateDonationStatusController);
//Protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//Protected route adminauth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
