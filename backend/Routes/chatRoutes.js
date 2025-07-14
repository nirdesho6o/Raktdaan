const express = require('express');
const router = express.Router();

router.post('/chat', async (req, res) => {
    try {
        const { message, conversation_history } = req.body;
        
        console.log('=== DEBUG INFO ===');
        console.log('Received message:', message);
        console.log('API Key exists:', !!process.env.HUGGING_FACE_API_KEY);
        console.log('API Key preview:', process.env.HUGGING_FACE_API_KEY ? process.env.HUGGING_FACE_API_KEY.substring(0, 10) + '...' : 'NOT FOUND');
        
        if (!message || message.trim() === '') {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Simple rule-based responses for testing
        let response = '';
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            response = 'Hello! How can I help you today?';
        } else if (lowerMessage.includes('help')) {
            response = 'I\'m here to help! What do you need assistance with?';
        } else if (lowerMessage.includes('thanks') || lowerMessage.includes('thank you')) {
            response = 'You\'re welcome! Is there anything else I can help you with?';
        } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
            response = 'Goodbye! Have a great day!';
        } else {
            const responses = [
                `I understand you said: "${message}". How can I help you with that?`,
                'That\'s interesting! Tell me more about what you\'re looking for.',
                'I\'m here to assist you. What specific information do you need?',
                'Thanks for your message. How else can I help you today?',
                'I\'m listening. What would you like to know more about?'
            ];
            response = responses[Math.floor(Math.random() * responses.length)];
        }

        console.log('Sending response:', response);
        res.json({ response });

    } catch (error) {
        console.error('=== ERROR ===');
        console.error('Error details:', error);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        res.status(500).json({ 
            error: 'Sorry, I am having trouble right now. Please try again later.',
            debug: error.message 
        });
    }
});

router.get('/test', (req, res) => {
    res.json({ 
        message: 'Chat API is working!',
        env_loaded: !!process.env.HUGGING_FACE_API_KEY,
        timestamp: new Date().toISOString()
    });
});

router.post('/chat-ai', async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!process.env.HUGGING_FACE_API_KEY) {
            return res.status(500).json({ error: 'API key not configured' });
        }

        console.log('Attempting AI request...');
        
        const axios = require('axios');
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
            {
                inputs: message,
                parameters: {
                    max_new_tokens: 100,
                    temperature: 0.7
                }
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                timeout: 30000
            }
        );

        console.log('AI Response:', response.data);
        
        let aiResponse = 'I apologize, but I could not generate a response.';
        if (response.data && response.data.length > 0) {
            aiResponse = response.data[0].generated_text || aiResponse;
        }

        res.json({ response: aiResponse });

    } catch (error) {
        console.error('AI API Error:', error.response?.data || error.message);
        res.status(500).json({ 
            error: 'AI service unavailable',
            details: error.response?.data || error.message
        });
    }
});

module.exports = router;