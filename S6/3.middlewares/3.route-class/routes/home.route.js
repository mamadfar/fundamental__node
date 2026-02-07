import { Router } from "express";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send("A GET request received to /");
  })
  .post((req, res) => {
    res.send("A POST request received to /");
  })
  .put((req, res) => {
    res.send("A PUT request received to /");
  });

export default router;
