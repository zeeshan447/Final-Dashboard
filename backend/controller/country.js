const pool = require("../client");

const countryGet = async (req, res) => {
  try {
    let location = await pool.query(`select * from country `);
    res.json({ statusCode: 200, locations: location.rows });
  } catch (error) {
    console.log(error.message);
    res.json({ statusCode: 300, message: error.message });
  }
};

const countryinsert = async function (req, res) {
  try {
    // var company_id =  client.query(`SELECT company_id FROM "company" `);
    //console.log(company_id);
    let { country_name } = req.body;

    await pool.query(
      `INSERT INTO "country" (country_name) VALUES($1)`,
      [country_name],
      function (err, result) {
        if (err) {
          console.log(err.message);
        } else {
          res.json({
            status: 201,
            msg: "Add Country Sucessfull",
          });
          // console.log(result.rows);
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    res.json({ statusCode: 300, message: error.message });
  }
};
module.exports = { countryinsert, countryGet };
