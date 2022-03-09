var express = require("express");
var app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
var serverPort = 3001;

const casual = require("casual");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(serverPort, () => {
  console.log("Server running on port " + serverPort);
});

// ------- API 2 - for Getting User Details - Big Insights ------------------
app.get("/User/:countrycode/:projectName/:ldapUserName", (req, res, next) => {
  var countryCode = req.params.countryCode;
  var projectName = req.params.projectName;
  var ldapUserName = req.params.ldapUserName;
  console.log("GET Requests ->" + JSON.stringify(req.headers, null, 4));
  var retObj = {
    ldapString: null,
    email: casual.email,
    telephone: casual.phone,
    name: casual.name,
    ldapUserId: ldapUserName,
    userId: casual.username,
    description: casual.description,
    uuid: casual.uuid,
    notes: null,
    userGroups: [
      {
        groupName: "MFG Chain Restriction",
        description: null,
        members: [],
      },
      {
        groupName: "MFG Distribution",
        description: null,
        members: [],
      },
      {
        groupName: "Playlist Users",
        description: null,
        members: [],
      },
      {
        groupName: casual.card_type,
        description: null,
        members: [],
      },
      {
        groupName: casual.card_type,
        description: null,
        members: [],
      },
      {
        groupName: casual.card_type,
        description: null,
        members: [],
      },
    ],
  };
  var jsonResp = JSON.stringify(retObj, null, 4);
  console.log("RESPONSE ->" + jsonResp);
  res.json(retObj);
});

// ------- API 3 - for Getting User Details - Retailer Insights ------------------
app.get(
  "/User/:countrycode/:projectName/:retailerID/:ldapUserName",
  (req, res, next) => {
    var countryCode = req.params.countryCode;
    var projectName = req.params.projectName;
    var retailerID = req.params.retailerID;
    var ldapUserName = req.params.ldapUserName;
    console.log("GET Requests ->" + JSON.stringify(req.headers, null, 4));
    var retObj = {
      ldapString: null,
      email: casual.email,
      telephone: casual.phone,
      name: casual.name,
      ldapUserId: ldapUserName,
      userId: casual.username,
      description: casual.description,
      uuid: casual.uuid,
      notes: null,
      userGroups: [
        {
          groupName: "Bashas', Inc (pn1usiba)",
          description: null,
          members: [],
        },
        {
          groupName: "Everyone",
          description: null,
          members: [],
        },
        {
          groupName: "MFD Reporting Users",
          description: null,
          members: [],
        },
        {
          groupName: "RI Pilot Users",
          description: null,
          members: [],
        },
        {
          groupName: "Retailer Insights",
          description: null,
          members: [],
        },
        {
          groupName: "Retailer Insights - Brand Catalyst",
          description: null,
          members: [],
        },
        {
          groupName: "Retailer Insights US",
          description: null,
          members: [],
        },
        {
          groupName: casual.card_type,
          description: null,
          members: [],
        },
      ],
    };
    var jsonResp = JSON.stringify(retObj, null, 4);
    console.log("RESPONSE ->" + jsonResp);
    res.json(retObj);
  }
);

// ------- API 4 - for Adding New User - Big Insights ------------------
app.post("/User/:countrycode/:projectName/:ldapUserName", (req, res, next) => {
  var countryCode = req.params.countryCode;
  var projectName = req.params.projectName;
  var ldapUserName = req.params.ldapUserName;
  console.log("POST Requests ->" + JSON.stringify(req.headers, null, 4));
  var retObj = {
    ldapString: null,
    email: casual.email,
    telephone: casual.phone,
    name: casual.name,
    ldapUserId: ldapUserName,
    userId: casual.username,
    description: casual.description,
    uuid: casual.uuid,
    notes: null,
    userGroups: [
      {
        groupName: "Manufacturer Insights US",
        description: null,
        members: [],
      },
      {
        groupName: "MFG Chain Restriction",
        description: null,
        members: [],
      },
      {
        groupName: "MFG Distribution",
        description: null,
        members: [],
      },
      {
        groupName: "Playlist Users",
        description: null,
        members: [],
      },
      {
        groupName: casual.card_type,
        description: null,
        members: [],
      },
      {
        groupName: casual.card_type,
        description: null,
        members: [],
      },
    ],
  };
  var jsonResp = JSON.stringify(retObj, null, 4);
  console.log("RESPONSE ->" + jsonResp);
  res.json(retObj);
});

// ------- API 5 - for Adding New User - Retailer Insights ------------------

//--------Still in Development -----------

// ------- API 6 - for Fetching All group List - Big Insights ------------------
app.get("/Group/:countrycode/:projectName", (req, res, next) => {
  var countryCode = req.params.countryCode;
  var projectName = req.params.projectName;
  console.log("GET Requests ->" + JSON.stringify(req.headers, null, 4));
  var retObj = [
    {
      groupName: "CMC AO User Group",
      description: null,
      members: [],
    },
    {
      groupName: "MFG Chain Restriction",
      description: null,
      members: [],
    },
    {
      groupName: "DBA Query Hist Dashboard Users",
      description: null,
      members: [],
    },
    {
      groupName: "LAS Users",
      description: null,
      members: [],
    },
    {
      groupName: "Visual Insights Users",
      description: null,
      members: [],
    },
    {
      groupName: casual.card_type,
      description: null,
      members: [],
    },
    {
      groupName: casual.name,
      description: null,
      members: [],
    },
    {
      groupName: casual.card_type,
      description: null,
      members: [],
    },
    {
      groupName: casual.card_type,
      description: null,
      members: [],
    },
    {
      groupName: casual.name,
      description: null,
      members: [],
    },
    {
      groupName: casual.card_type,
      description: null,
      members: [],
    },
  ];
  var jsonResp = JSON.stringify(retObj, null, 4);
  console.log("RESPONSE ->" + jsonResp);
  res.json(retObj);
});

// ------- API 7 - for Fetching All group List - Retailer Insights ------------------
app.get("/Group/:countrycode/:projectName/:retailerID", (req, res, next) => {
  var countryCode = req.params.countryCode;
  var projectName = req.params.projectName;
  console.log("GET Requests ->" + JSON.stringify(req.headers, null, 4));
  var retObj = [
    {
      groupName: "CMC AO User Group",
      description: null,
      members: [],
    },
    {
      groupName: "RI Pilot Users",
      description: null,
      members: [],
    },
    {
      groupName: "LAS Users",
      description: null,
      members: [],
    },
    {
      groupName: "Visual Insights Users",
      description: null,
      members: [],
    },
    {
      groupName: casual.card_type,
      description: null,
      members: [],
    },
    {
      groupName: casual.name,
      description: null,
      members: [],
    },
  ];
  var jsonResp = JSON.stringify(retObj, null, 4);
  console.log("RESPONSE ->" + jsonResp);
  res.json(retObj);
});

// ------- API 8 - Assigning Groups to User - Big Insights ------------------
app.post(
  "/User/:countrycode/:projectName/:ldapUserName/:group",
  (req, res, next) => {
    var countryCode = req.params.countryCode;
    var projectName = req.params.projectName;
    var ldapUserName = req.params.ldapUserName;
    console.log(
      "POST Requests Header->" + JSON.stringify(req.headers, null, 4)
    );
    console.log("POST Requests ->" + JSON.stringify(req.headers, null, 4));
    var retObj = {
      ldapString: null,
      email: casual.email,
      telephone: casual.phone,
      name: casual.name,
      ldapUserId: ldapUserName,
      userId: casual.username,
      description: casual.description,
      uuid: casual.uuid,
      notes: null,
      userGroups: [
        {
          groupName: "Manufacturer Insights US",
          description: null,
          members: [],
        },
        {
          groupName: "MFG Chain Restriction",
          description: null,
          members: [],
        },
        {
          groupName: "MFG Distribution",
          description: null,
          members: [],
        },
        {
          groupName: "Playlist Users",
          description: null,
          members: [],
        },
        {
          groupName: "LAS Users",
          description: null,
          members: [],
        },
        {
          groupName: "CMC AO User Group",
          description: null,
          members: [],
        },
        {
          groupName: casual.card_type,
          description: null,
          members: [],
        },
        {
          groupName: casual.name,
          description: null,
          members: [],
        },
        {
          groupName: casual.card_type,
          description: null,
          members: [],
        },
        {
          groupName: casual.name,
          description: null,
          members: [],
        },
      ],
    };
    var jsonResp = JSON.stringify(retObj, null, 4);
    console.log("RESPONSE ->" + jsonResp);
    res.json(retObj);

    // console.log("POST Requests Body ->" + JSON.stringify(req.body, null, 4));
    // var jsonResp = casual.boolean;
    // console.log("RESPONSE ->" + jsonResp);
    // res.json(jsonResp);
  }
);

// ------- API 9 - Assigning Groups to User - Retailer Insights ------------------
app.post(
  "/User/:countrycode/:projectName/:retailerID/:ldapUserName/group",
  (req, res, next) => {
    var countryCode = req.params.countryCode;
    var projectName = req.params.projectName;
    var ldapUserName = req.params.ldapUserName;
    console.log(
      "POST Requests Header->" + JSON.stringify(req.headers, null, 4)
    );
    console.log("POST Requests Body ->" + JSON.stringify(req.body, null, 4));
    var jsonResp = casual.boolean;
    console.log("RESPONSE ->" + jsonResp);
    res.json(jsonResp);
  }
);

// ------- API 1 - for Fetching List of Retailer Names ------------------
app.get("/Retailer/:countrycode", (req, res, next) => {
  var countryCode = req.params.countryCode;
  console.log("GET Requests ->" + JSON.stringify(req.headers, null, 4));
  var retObj = [
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "dx",
      retailerName: "Delhaize Group",
      retailerAlais: "dx",
      userIdSuffix: "_frdx",
      defaultUserGroups: [
        {
          groupName: "Delhaize Group (pn2fridx)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "ig",
      retailerName: "Intergamma",
      retailerAlais: "ig",
      userIdSuffix: "_frig",
      defaultUserGroups: [
        {
          groupName: "Intergamma (pn2friig)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "im",
      retailerName: "Les Mousquetaires",
      retailerAlais: "im",
      userIdSuffix: "_frim",
      defaultUserGroups: [
        {
          groupName: "Les Mousquetaires (pn2friim)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "mp",
      retailerName: "Monoprix S.A.",
      retailerAlais: "mp",
      userIdSuffix: "_frmp",
      defaultUserGroups: [
        {
          groupName: "Monoprix S.A. (pn2frimp)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "in",
      retailerName: "Les Mousquetaires",
      retailerAlais: "in",
      userIdSuffix: "_frin",
      defaultUserGroups: [
        {
          groupName: "Les Mousquetaires (pn2friin)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "sm",
      retailerName: "Supermarchés Match",
      retailerAlais: "sm",
      userIdSuffix: "_frsm",
      defaultUserGroups: [
        {
          groupName: "Supermarchés Match (pn2frism)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "su",
      retailerName: "Système U",
      retailerAlais: "su",
      userIdSuffix: "_frsu",
      defaultUserGroups: [
        {
          groupName: "Système U (pn2frisu)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "cf",
      retailerName: "Carrefour S.A. France",
      retailerAlais: "cf",
      userIdSuffix: "_frcf",
      defaultUserGroups: [
        {
          groupName: "Carrefour S.A. France (pn2fricf)",
          description: null,
          members: [],
        },
      ],
    },
    {
      country: {
        countryId: "fr",
        countryName: "fr",
        countryAlais: "CMF",
        userIdSuffix: "_cifr",
        defaultUserGroups: [
          {
            groupName: "MFG Shopper",
            description: null,
            members: [],
          },
        ],
      },
      retailerId: "de",
      retailerName: "Delhaize Group",
      retailerAlais: "de",
      userIdSuffix: "_frde",
      defaultUserGroups: [
        {
          groupName: "Delhaize Group (pn2fride)",
          description: null,
          members: [],
        },
      ],
    },
  ];
  var jsonResp = JSON.stringify(retObj, null, 4);
  console.log("RESPONSE ->" + jsonResp);
  res.json(retObj);
});

//----------- Vault Bulk Promotions -------------------------
// ------- API 1 - Publish Bulk Promotions ------------------
app.post("/queue-ad-action-req", (req, res, next) => {
  console.log("POST Requests Header->" + JSON.stringify(req.headers, null, 4));
  // console.log("POST Requests Body ->" + JSON.stringify(req.body, null, 4));
  var post_data = req.body;
  console.log(post_data);
  var jsonResp = casual.boolean;
  var jsonResponse = {
    user_email_id: post_data.user_email_id,
    env_code: post_data.env_code,
    country_code: post_data.country_code,
    action: post_data.action,
    req_id: 1,
    resp_str: "Targeting Request has been Queued Successfully",
  };
  console.log("RESPONSE ->" + jsonResponse);
  res.json(jsonResponse);
});
