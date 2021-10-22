const pool = require("../client");

const hiringStages = async (req, res) => {
  try {
    let allstages = await pool.query(`select * from stages`);
    res.json({ statusCode: 200, stages: allstages.rows });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  hiringStages,
};
