const { Jobs } = require('../../models');

// create a job post
exports.createJobPost = async (req, res) => {
    const { title, description, type, category, qualification, location, salary, experience } = req.body;
    const UserId = req.user.id;
    const userName = req.user.firstname;
    const email = req.user.email;
    await Jobs.create({job_title: title, job_description: description, job_type: type, job_category: category, job_location: location, job_qualification: qualification, job_salary: salary, job_experience: experience, userName: userName, UserId: UserId, email:email });
    res.json('job added');
};

// get all jobs posted
exports.getAllJobs = async (req, res) => {
    const jobs = await Jobs.findAll();
    res.json(jobs);
};



// get single job by id
exports.singleJob = async (req, res) => {
    const id = req.params.id;
    const job = await Jobs.findByPk(id);
    res.json(job);
};

// get jobs with the same promoter
exports.filterJobs = async (req, res) => {
    const promoter = req.params.userName;
    console.log(promoter);
    const relatedjob = await Jobs.findAll({ where: { userName: promoter } });
    res.json(relatedjob);
};