const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb://LakshmiKrishna:lakshmikrishna@ac-hpvbi7o-shard-00-00.fgcxtxc.mongodb.net:27017,ac-hpvbi7o-shard-00-01.fgcxtxc.mongodb.net:27017,ac-hpvbi7o-shard-00-02.fgcxtxc.mongodb.net:27017/electricdb?ssl=true&replicaSet=atlas-14be5c-shard-0&authSource=admin&appName=Cluster0"
)
    .then(() => {
        console.log("MongoDB Connected");

    })

    .catch((err) => {
        console.log(err);
    });

const course = mongoose.model("hackathons", new mongoose.Schema(
    {
        bookingId: String,
        ownerName: String,
        email: String,
        phone: String,
        vehicleregistrationNumber: String,
        vehicleBrand: String,
        vehicleModel: String,
        batteryCapacity: String,
        connecterType: String,
        chargingDate: String,
        timeSlot: String,
        estimatedTimeUnit: String,
        chargingBayNumber: String
    }
))

app.post("/add-vehiclebooking", async (request, response) => {
    await course.create(request.body)
    response.json({ "status": "success" })
})



app.listen(3000, () => {
    console.log("Server Started on Port 3000");
})