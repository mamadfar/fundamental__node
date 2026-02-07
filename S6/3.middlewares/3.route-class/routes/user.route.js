import {Router} from 'express'


const router = Router();

router.route("/")
    .get((req, res) => {
        res.send("A GET request received to /user");
    })
    .post((req, res) => {
        res.send("A POST request received to /user");
    })
    .put((req, res) => {
        res.send("A PUT request received to /user");
    });

router.route("/route1")
    .get((req, res) => {
        res.send("A GET request received to /user/route1");
    })
    .post((req, res) => {
        res.send("A POST request received to /user/route1");
    })
    .put((req, res) => {
        res.send("A PUT request received to /user/route1");
    });

export default router;