import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello World!");
})

router.get("/popa", (req, res) => {
    res.send("Hello popa!");
})

export default router;