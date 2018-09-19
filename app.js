const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html lang="en">
           <head>
           <meta charset="UTF-8" />
           <title>All about pets!</title>
           </head>
           <h1>Kittens and Puppies Galore</h1>
           </html>
           `)
})

app.get('/kittens', (req, res) => {
  res.send(`
            <!DOCTYPE html>
           <html lang="en">
           <head>
           <meta charset="UTF-8" />
           <title>kitten website</title>
           </head>
           <h1>Kittens!!!!</h1>
           </html>

           `)
})

app.get('/puppies', (req, res) => {
  res.send(`
            <!DOCTYPE html>
           <html lang="en">
           <head>
           <meta charset="UTF-8" />
           <title>puppy website</title>
           </head>
           <h1>Puppies!!!!</h1>
           </html>

           `)
})


const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
