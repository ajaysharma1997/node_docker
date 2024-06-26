const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = '';
let message = '';
let blessing = '';
let by = '';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Congratulations!!</h2>
          <h3 style="color: red">${message}.</h3>
          <h4 style="color: green">${blessing}.</h4>
          <h5 style="color: blue">${by}.</h4>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Special person</label>
            <input type="text" name="goal">
          </div>
          <button>Go</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  if(userGoal === 'Kirti' || userGoal === 'kirti' || userGoal === 'Ajay' || userGoal === 'ajay') {
    message = 'Happy 1st Engagement Anniversary Kirti.';
    blessing = 'Bhagwaan Tumhe hamesha khush rakhe. Enjoy your day 🎉';
    by = 'By: Pandit Ajay Sharma';
  } else {
    message = '';
    blessing = '';
    by = '';
  }
  res.redirect('/');
});

app.listen(80);
