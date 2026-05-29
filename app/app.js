import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Helló!')
})

app.get('/employees', (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, name: 'Lengyel József' },
            { id: 2, name: 'Kiss Katalin' }
        ]
    })
})

export default app
