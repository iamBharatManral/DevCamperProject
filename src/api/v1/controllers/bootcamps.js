// @desc Get all the bootcamps
// @route /api/v1/bootcamps
// @request GET
// @access Public
exports.getAllBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc Get a bookcamp by id
// @route /api/v1/bootcamps/:id
// @request GET
// @access Public
exports.getBootcampById = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Show bootcamp with id ${req.params.id}`,
	});
};

// @desc Create a bootcamp
// @route /api/v1/bootcamps
// @request POST
// @access Private
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: "Create a new bootcamp" });
};

// @desc Update a bootcamp
// @route /api/v1/bootcamps/:id
// @request PUT
// @access Private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Update a bootcamp ${req.params.id}`,
	});
};

// @desc Delete a bootcamp
// @route /api/v1/bootcamps/:id
// @request DELETE
// @access Private
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Deleted a bootcamp ${req.params.id}`,
	});
};
