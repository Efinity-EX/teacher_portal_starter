const dotenv = require('dotenv')
const path = require('path')

// Determine which .env file to use based on the NODE_ENV value
const envPath = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'

// Provide the path to the correct .env file
dotenv.config({ path: path.resolve(process.cwd(), envPath) })

const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 8000

// Middlewares
app.use(bodyParser.json({ limit: '50mb' }))
app.use(
    cors({
        origin: '*',
    })
)

app.use(express.static(path.join(__dirname, 'dist')))

app.use((req, res, next) => {
    let originalSend = res.send
    res.send = function (data) {
        client.trackRequest({
            name: req.path,
            resultCode: res.statusCode,
            success: res.statusCode < 400,
            url: req.url,
        })
        originalSend.apply(res, arguments)
    }
    next()
})

app.use((err, req, res, next) => {
    client.trackException({ exception: err })
    res.status(500).send('Something broke!')
})

// API Routes
app.post('/api/login', handleLogin)
app.post('/api/logout', handleLogout)

app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
        // If any API route is not found, you can handle it here
        res.status(404).send('API endpoint not found')
    } else {
        // Serve index.html for non-API requests (i.e., SPA routes)
        res.sendFile(path.join(__dirname, 'dist', 'index.html'))
    }
})

app.listen(port, () => {
    console.log('Server start at port: ' + port)
})

function handleLogin(req, res) {
    const { username, password } = req.body

    axios
        .post(
            `${process.env.VITE_API_BASE_URL}/player/login`,
            { username, password },
            { headers: apiHeaders }
        )
        .then((response) => {
            res.json(response.data)
        })
        .catch((error) => {
            res.status(error.response.status).json({ message: error.message })
        })
}

function handleLogout(req, res) {
    const xUserToken = req.headers['key']

    const headers = {
        ...apiHeaders,
        'X-User-Token': xUserToken,
        'Content-Type': 'application/json',
    }

    axios
        .post(`${process.env.VITE_API_BASE_URL}/player/logout`, {}, { headers: headers })
        .then((response) => {
            res.json({ code: 200, message: 'Logout successful' })
        })
        .catch((error) => {
            res.status(error.response.status).json({ message: error.response.statusText })
        })
}
