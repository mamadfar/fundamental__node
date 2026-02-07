import { Router } from "express";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.send("A GET request received to /admin");
  })
  .post((req, res) => {
    res.send("A POST request received to /admin");
  })
  .put((req, res) => {
    res.send("A PUT request received to /admin");
  });

router
  .route("/route1")
  .get((req, res) => {
    res.send("A GET request received to /admin/route1");
  })
  .post((req, res) => {
    res.send("A POST request received to /admin/route1");
  })
  .put((req, res) => {
    res.send("A PUT request received to /admin/route1");
  });

export default router;
