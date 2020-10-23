import express from 'express';

const app = express();


app.listen(3333, ()=> {
    console.log("Server ON");
    
})

app.get('/', (req, res)=>{
    res.send('Server ON')    
})