const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sumedha:sumu123@cluster0.jv4x88s.mongodb.net/teamdb").then(

    () => {
        console.log("MongoDB Connected")
    }

).catch(

    (error) => {

        console.log(error)

    }

)

const Team = mongoose.model("Teams", new mongoose.Schema(

{
    teamId: String,
    teamName: String,
    leaderName: String,
    leaderEmail: String,
    leaderPhone: String,
    collegeName: String,
    noOfMembers: String,
    projectTitle: String,
    problemStatement: String,
    techStack: String,
    mentorName: String,
    registrationDate: String,
    stationNumber: String,
}

))

app.post("/add-team", async (request, response) => {

    await Team.create(request.body)

    response.json({ "status": "success" })

})

app.post("/view-team", async (request, response) => {

    const teams = await Team.find()

    response.json(teams)

})

app.listen(3000, () => {

    console.log("server started")

})