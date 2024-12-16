// Simple Express service with two endpoints in TypeScript
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

type CalcRequest = {
    num1: number;
    num2: number;
};

// CalcOne endpoint
app.post('/calcOne', (req: Request, res: Response) => {
    const { num1, num2 }: CalcRequest = req.body;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const result = num1 + num2;
        res.json({ result });
    } else {
        res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }
});

// CalcTwo endpoint
app.post('/calcTwo', (req: Request, res: Response) => {
    const { num1, num2 }: CalcRequest = req.body;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const result = num1 * num2;
        res.json({ result });
    } else {
        res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
