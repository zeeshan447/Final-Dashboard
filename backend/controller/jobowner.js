const pool = require("../client");

const jobowner = async (req, res) => {
  try {
    let role = await pool.query(
      `select user_name,user_id , role_name from users u join roles r on  u.role_id = r.role_id where role_value=80`
    );
    res.json({ statusCode: 200, jobOwner: role.rows });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  jobowner,
};
