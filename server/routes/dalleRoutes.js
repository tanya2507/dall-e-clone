import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

// Define the OpenAI API key configuration
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

router.get('/', (req, res) => {
  res.send('Hello from DALL-E!');
});

// Generating image
router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        // Asynchronous function call to the OpenAI API to generate an image based on a given prompt
        const aiResponse = await openai.images.generate({
            prompt,
            n: 1, // One image
            size: '1024x1024',
            response_format: 'b64_json' // b64_json indicates that the generated image should be returned as a base64-encoded JSON string
        });

        
        
        const image = aiResponse.data[0].b64_json; // Adjusting to match the expected response structure

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error); // Logging the error to the console
        res.status(500).send(error.message || 'An error occurred');
    }
});

export default router;
