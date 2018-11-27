import express from 'express';

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to iReporter',
  })
})

app.listen(port, (req, res) => {
  console.log('working');
});

export default app;