const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

// // Function to call Gemini API (GET request)
// const callGeminiAPI = async () => {
//     try {
//         const response = await axios.get('https://api.gemini.com/v1/pubticker/btcusd');
//         console.log(response.data)
//         return response.data;
//     } catch (error) {
//         console.error('Error calling Gemini API:', error.response ? error.response.data : error.message);
//         throw error;
//     }
// };

// // Endpoint to handle chat messages
// app.post('/api/chat', async (req, res) => {
//     const { inputChat } = req.body;  
//     console.log('Received inputChat:', inputChat);

//     try {
//         const result = await callGeminiAPI(); 
//         res.json({ message: `Price: ${result.last} USD` });  
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch data from Gemini API' });
//     }
// });
app.get('/', (req, res) => {
    res.send("hi rajesh how r u");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
