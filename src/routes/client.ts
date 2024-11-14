import { Router } from "express";
import { upload } from "../configF/multer";
import { checkMulter } from "../lib/errors/error-response-handler"
import { signup, getClientWellness, forgotPassword, newPassswordAfterEmailSent, passwordReset, getClientInfo, editClientInfo } from "../controllers/client/client";
import { requestAppointment, getAllAppointmentsOfAClient } from "../controllers/appointments/appointments";
import { checkAuth } from "src/middleware/check-auth";
const router = Router();

router.post("/signup", signup)
// router.post("/login", login)
router.patch("/forgot-password", forgotPassword)
router.patch("/new-password-email-sent", newPassswordAfterEmailSent)
router.patch("/update-password/:id", passwordReset)


router.get("/:id/wellness", checkAuth, getClientWellness)
router.route("/:id").get(checkAuth, getClientInfo).put(upload.single("profilePic"), checkMulter, checkAuth, editClientInfo)
router.post("/appointment", checkAuth, requestAppointment)
router.get("/appointment/:id", checkAuth, getAllAppointmentsOfAClient)

export { router }