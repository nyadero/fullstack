const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');
const { validateToken } = require('../../middlewares/Authmiddleware');

// create, edit, delete and get all posts

// create a job post
router.post('/', validateToken, jobsController.createJobPost);

// get all jobs posted
router.get('/', jobsController.getAllJobs);

// get single job by id
router.get('/job/:id', jobsController.singleJob);

// find all jobs where the promoter is the same
router.get('/related/:userName', jobsController.filterJobs);

// find jobs with keyword search query
router.get('/search', jobsController.searchJobs);

// find jobs with location
router.get('/search/location', jobsController.location);

module.exports = router;