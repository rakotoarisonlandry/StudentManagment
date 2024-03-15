import express from "express";
import {
  addStudent,
  deleteStudent,
  getStudent,
  getStudents,
  updateStudent,
} from "../Controllers/StudentController.js";

const router = express.Router();
router.post("/", addStudent);
router.get("/", getStudents);
router.get("/:num_matricule", getStudent);
router.put("/:num_matricule", updateStudent);
router.delete("/:num_matricule", deleteStudent);

export default router;
