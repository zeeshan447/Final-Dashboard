const msal = require("@azure/msal-node");
const { response } = require("express");
const { Pool } = require("pg");
const pool = require("../client");
var DASHBOARD_URL = process.env.DASHBOARD_URL;
const REDIRECT_URI = process.env.REDIRECT_URI;
var OUTLOOK_CLIENT_ID = process.env.OUTLOOK_CLIENT_ID;
var OUTLOOK_CLIENT_SECRET = process.env.OUTLOOK_CLIENT_SECRET;

const config = {
  auth: {
    clientId: process.env.OUTLOOK_CLIENT_ID,
    authority:
      "https://login.microsoftonline.com/4815bcf5-bf11-4348-8e31-c512254994b7",
    clientSecret: encodeURI(process.env.OUTLOOK_CLIENT_SECRET),
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
  cache: {
    cacheLocation: "localStorage",
  },
};

// Create msal application object
const pca = new msal.ConfidentialClientApplication(config);

const outlookLogin = (req, res) => {
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: process.env.DASHBOARD_URL,
  };

  // get url to sign user in and consent to scopes needed for application
  pca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
    })
    .catch((error) => console.log(JSON.stringify(error)));
};

const outlookLoginCallback = async (req, res) => {
  try {
    console.log("here");
    const tokenRequest = {
      code: req.query.code,
      scopes: ["user.read"],
      redirectUri: process.env.REDIRECT_URI,
    };

    const response = await pca.acquireTokenByCode(tokenRequest);
    console.log("\nResponse: \n:", response);
    if (response.account) {
      let email = response.account.username.toLocaleLowerCase();
      console.log(email.toLocaleLowerCase());
      //await Pool.connect();
      const chk_email = await pool.query(
        `select * from users where email = '${email}'`
      );
      console.log(chk_email.rows);
      if (chk_email.rows.length === 0) {
        return res
          .status(403)
          .send({ statusCode: 403, message: "User not exist", body: false });
      } else {
        return res
          .status(200)
          .json({ statusCode: 200, token: response.accessToken, body: true });
        //   res.redirect(`${ DASHBOARD_URL}?accesstoken=${response.accessToken}`);
        // res.redirect(`${DASHBOARD_URL}?accesstoken=${response.accessToken}`);
      }
    }

    // res.send("looged in ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  outlookLogin,
  outlookLoginCallback,
};
