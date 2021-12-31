const express = require("express");
const router = express.Router();

const {
	getAllBootcamps,
	createBootcamp,
	updateBootcamp,
	getBootcampById,
	deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getAllBootcamps).post(createBootcamp);

router
	.route("/:id")
	.get(getBootcampById)
	.put(updateBootcamp)
	.delete(deleteBootcamp);

module.exports = router;
