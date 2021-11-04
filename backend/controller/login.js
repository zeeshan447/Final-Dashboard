const msal = require("@azure/msal-node");
const { response } = require("express");
const { Pool } = require("pg");
const pool = require("../client");
let DASHBOARD_URL = process.env.DASHBOARD_URL;
const REDIRECT_URI = process.env.REDIRECT_URI;
let OUTLOOK_CLIENT_ID = process.env.OUTLOOK_CLIENT_ID;
let OUTLOOK_CLIENT_SECRET = process.env.OUTLOOK_CLIENT_SECRET;
let POST_REDIRECT_URI = process.env.POST_REDIRECT_URI;

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
  const reqs = req.query.redirect;
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: reqs,
  };

  // get url to sign user in and consent to scopes needed for application
  pca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((error) => console.log(JSON.stringify(error)));
};

const outlookLoginCallback = async (req, res) => {
  try {
    const redirect = req.query.redirect;
    console.log("here");
    console.log("rrr", redirect);
    const tokenRequest = {
      code: req.query.code,
      scopes: ["user.read"],
      redirectUri: redirect,
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
      console.log("user details", chk_email.rows);

      // console.log("role value", role_name.rows[0].role_value);
      if (chk_email.rows.length === 0) {
        console.log("user not exists");
        return res
          .status(403)
          .send({ statusCode: 403, message: "User not exist", body: false });
      } else {
        console.log("user  exists");
        const role_name = await pool.query(
          `Select * from roles where role_id = ${chk_email.rows[0].role_id}`
        );
        return res.status(200).json({
          statusCode: 200,
          token: response.accessToken,
          body: true,
          user_name: chk_email.rows[0].user_name,
          user_id: chk_email.rows[0].user_id,
          role_id: role_name.rows[0].role_id,
          role_name: role_name.rows[0].role_name,
          role_value: role_name.rows[0].role_value,
        });
        //   res.redirect(`${ DASHBOARD_URL}?accesstoken=${response.accessToken}`);
        // res.redirect(`${DASHBOARD_URL}?accesstoken=${response.accessToken}`);
      }
    }

    // res.send("looged in ");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
const outlookLogout = async (req, res) => {
  const config = {
    auth: {
      clientId: process.env.OUTLOOK_CLIENT_ID,
      redirectUri: process.env.DASHBOARD_URL, // defaults to application start page
      postLogoutRedirectUri: process.env.DASHBOARD_URL,
    },
  };

  const pca = new msal.PublicClientApplication(config);
  pca
    .getTokenCache()
    .getAllAccounts()
    .then((response) => {
      const account = response[0];
      pca
        .getTokenCache()
        .removeAccount(account)
        .then(() => {
          return res.status(200).json({ msg: "Account logout" });
        })
        .catch((error) => {
          return res.status(500).send({ error });
        });
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

module.exports = {
  outlookLogin,
  outlookLoginCallback,
  outlookLogout,
};
