const pool = require("../client");

const worktype = async (req, res) => {
  try {
    let jobs = await pool.query(`select * from work_type`);
    res.json({ statusCode: 200, stages: jobs.rows });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  worktype,
};
