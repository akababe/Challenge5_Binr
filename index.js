const express = require ('express')
const app = express()
const port = 3000;

app.use(express.static('statics'));
app.use(express.json());
app.set('view engine','ejs');

app.get('/', (req,res)=>{
    res.render('index', {
        linkGame : "game"
    })
})

app.get('/game', (req,res)=>{
    res.render('game')
    
})

app.listen(port,()=>{
    console.log(`App running in port ${port}`)
})