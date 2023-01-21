const express = require('express')

const app = express()
app.set("view engine", 'ejs')

app.listen(1000)
console.log("Server is running...");

// Middlwares
app.use(express.static("public"))
app.use(express.urlencoded())


app.get('/', (req, res) => {
    res.render("index", { heroTitle: "THE BEST COFFEE HOUSES IS HERE." })
})

app.get('/about', (req, res) => {
    res.render("about",)
})

app.get('/contacts', (req, res) => {
    res.render("contacts",)
})

let slhotels = [
    {
        id: 1, name: "mocha coffee", famous: ["Fish", "Steak", "coffee", "iced- Drinks"], votes: 2, description: "  Guled waa hotel loo bogay"
    },

    {
        id: 2, name: "Assod Hotel", famous: ["Fish", "pizza"], votes: 2, description: "  Guled waa hotel loo bogay"
    },

    {
        id: 3, name: "Maansor Hotel", famous: ["bryaani", "Steak", "sandiwtch"], votes: 2, description: "  Guled waa hotel loo bogay"
    },

]

// GET Request
app.get('/restuarant', (req, res) => {


    res.render("restuarant", { hotels: slhotels })
})

// POST Request
app.post('/restuarant', (req, res) => {
    // Creating a restuarnt
    const newResturant = {
        id: 4,
        name: req.body.name,
        description: req.body.description,
        famousFoods: ["Fish", "mexican sandwich", "hot & iced coffee"],
        votes: 2
    }

    // Adding new resturant to list of hotels
    slhotels.push(newResturant)

    // Redirecting to the restuarant page
    res.redirect('/restuarant')

})

app.get("/addRestuarant", (req, res) => {
    res.render("addRestuarant")
})

app.use((req, res) => {
    res.status(404).render('404')
})

