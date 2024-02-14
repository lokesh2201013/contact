const express = require('express');
const router = express.Router();
 
router.route("/").get((req, res) => {
    res.status(200).json({ resp: "Gett contact" });
});
router.route("/").post((req, res) => {
    res.status(200).json({ resp: "Create" });
});
router.route("/:id").put((req, res) => {
    res.status(200).json({ resp: `Delete${req.params.id}` });
});
router.route("/:id").delete((req, res) => {
    res.status(200).json({ resp: `DElete${req.params.id}`  });
});

module.exports = router;
 