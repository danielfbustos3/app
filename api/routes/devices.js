const express = require("express");
const router = express.Router();

const { checkAuth } = require("../middlewares/authentication.js");

// models

import Device from "../models/device.js";

//API

router.get("/device", checkAuth, async (req, res) => {
  try {
    const userId = req.userData._id;

    const devices = await Device.find({ userId: userId });

    const toSend = {
      status: "success",
      data: devices
    };

    return res.status(200).json(toSend);
  } catch (error) {
    console.log("ERROR LISTING DEVICES");
    console.log(error);

    const toSend = {
      status: "error",
      error: error
    };

    return res.status(500).json(toSend);
  }
});

/* 
{
   "newDevice":{
      "dId":"121212",
      "name":"HOME",
      "templateName":"esp32 template",
      "templateId":"ababab"
   }
}
*/

router.post("/device", checkAuth, async (req, res) => {
  try {
    const userId = req.userData._id;
    var newDevice = req.body.newDevice;

    newDevice.userId = userId;
    newDevice.createdTime = Date.now();

    const device = await Device.create(newDevice);

    const toSend = {
      status: "success"
    };

    return res.json(toSend);
  } catch (error) {
    console.log("ERROR CREATING NEW DEVICE");
    console.log(error);

    const toSend = {
      status: "error",
      error: error
    };

    return res.status(500).json(toSend);
  }
});

router.delete("/device", (req, res) => {});

router.put("/device", (req, res) => {});

//FUNCTIONS

module.exports = router;
