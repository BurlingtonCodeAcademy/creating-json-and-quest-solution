const router = require("express").Router()
const answers = require("../api/answers.json")

router.get("/", (_, res) => {
    res.status(200).json(answers)
})

module.exports = router