// These import necessary modules and set some initial variables
require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const backend = express();
const port = 3001;

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
	windowMs: 1000, // 10 minutes
	max: 59, // limit each IP to 59 requests every per minute (1000ms)
});


// apply to all requests
backend.use(limiter);

// allow Cross Origin Resource Sharing from any Origin
backend.use(cors());


// Routes

// Basic Route Route
backend.get("/", (req, res) => res.send("Hello, World!"));

//Open Weather Map Routes
backend.get("/forecast", async (req, res) => {
	const searchString = `q=${req.query.q}`;
	try {
		// Using node-fetch with Pittsburgh's city ID on Open Weather Map along with API Key (APP_ID)
		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${searchString}&APPID=${process.env.REACT_APP_API_KEY}`);

		// Next, we'll filter out and return the results
		const results = await response.json();
		return res.json({
            success: true,
						results,
        })
	} catch(err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		})
	}
})

backend.get("/currentWeather", async (req, res) => {

	try {
		const searchString = `q=${req.query.q}`;
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${searchString}&APPID=${process.env.REACT_APP_API_KEY}`);

		const results = await response.json();
		return res.json({
			success: true,
			results,
		})
	} catch(err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		})
	}
})



backend.listen(port, () => console.log(`Example app listening on port ${port}!`));
