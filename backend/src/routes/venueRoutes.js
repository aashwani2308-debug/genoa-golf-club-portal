import { Router } from "express";
import { createVenueEnquiry, listVenueEnquiries } from "../controllers/venueController.js";

const router = Router();
router.get("/", listVenueEnquiries);
router.post("/", createVenueEnquiry);
export default router;
