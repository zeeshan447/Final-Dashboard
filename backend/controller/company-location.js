const pool = require("../client");

const companylocation = async (req, res) => {
  try {
    let location = await pool.query(`select * from company_location`);
    res.json({ statusCode: 200, locations: location.rows });
  } catch (error) {
    console.log(error.message);
    res.json({ statusCode: 300, message: error.message });
  }
};

///
const companyLocationbyID = async (req, res) => {
  try {
    const country_id = req.params.country_id;
    console.log("sdd", country_id);
    let location = await pool.query(
      `select * from company_location where country_id =$1`,
      [country_id],
      function (err, result) {
        if (err) {
          res.json({ statusCode: 300, locations: err.message });
        } else {
          res.json({ statusCode: 200, locations: result.rows });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    res.json({ statusCode: 300, message: error.message });
  }
};

///
const locationinsert = async function (req, res) {
  try {
    // var company_id =  client.query(`SELECT company_id FROM "company" `);
    //console.log(company_id);
    let { loc_name, country_id } = req.body;

    await pool.query(
      `INSERT INTO "company_location" (loc_name,country_id) VALUES($1,$2)`,
      [loc_name, country_id],
      function (err, result) {
        if (err) {
          console.log(err.message);
        } else {
          res.json({
            status: 201,
            msg: "Add Location Sucessfull",
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

module.exports = {
  companylocation,
  locationinsert,
  companyLocationbyID,
};
