const express = require('express')
const app = express()
const PORT = 8000

const players = {
    'jared':{
        'hats' : 2,
        'partner': 'Arigal',
        'armour': 'fancy dress',
        'mainSpell': 'Sacred Flame'
    },
    'nadja':{
        'hats' : 0,
        'partner': 'Rictavio',
        'armour': 'sparkly cape',
        'mainSpell': 'The Ember'
    },
    'ogre':{
        'hats' : 1,
        'partner': 'Axe',
        'armour': 'scales',
        'mainSpell': 'Chromatic Axe'
    },
    'preens':{
        'hats' : 0,
        'partner': 'Hidden bird',
        'armour': 'whatever is in fashion',
        'mainSpell': 'Eldrich Horrorscope'
    },
    'nothing':{
        'hats' : 'no player with that name',
        'partner': 'no player with that name',
        'armour': 'no player with that name',
        'mainSpell': 'no player with that name'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:inputName',(req,res)=>{
    const playerName = req.params.inputName.toLowerCase()
    if(players[playerName]){
        res.json(players[playerName])
    }else{
        res.json(players['nothing'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})