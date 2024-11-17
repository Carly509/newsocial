import express, { json } from 'express';
import cors from 'cors'; // Import the cors middleware
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
const REACT_APP_AIRTABLE_ID = process.env.REACT_APP_AIRTABLE_ID;
const REACT_APP_AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(json());




app.get('/', (req, res) => {
    res.send('Server Deployed 🥳')
})


app.get('/airtable', async (req, res) => {
    const airtableUrl = `https://api.airtable.com/v0/${REACT_APP_AIRTABLE_ID}/users`;

    try {
        const response = await fetch(airtableUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${REACT_APP_AIRTABLE_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorData}`);
        }

        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ error: 'An error occurred while fetching data from Airtable.' });
    }
});


app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
