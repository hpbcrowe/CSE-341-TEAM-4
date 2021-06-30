const express = require('express');
const router = express.Router();
const fs = require('fs');

//Path to JSON file, it could be hardcoded in this file.
const dummyData = require('../data/ta11.json')

//parse the file and then send it back 
router.get('/fetchAll',  (req, res, next) => {

    let avengers = fs.readFileSync('data/ta11.json', 'utf-8');
    console.log(avengers);
    console.log('Trying to console log JSON');
    let names = JSON.parse(avengers);
    res.status(200).json({ names, success: true })
    // res.json(dummyData);
});
//resp.success
router.post('/insertName', (req, res, next) => {
    // error checking
    console.log(req.body.newName);
    if (req.body.newName !== undefined) {
        const newName = req.body.newName;
        const newPower = req.body.newPower;
        let avengers = fs.readFileSync('data/ta11.json', 'utf-8');
        console.log(avengers);
        let names = JSON.parse(avengers);
        console.log(names);
        

// 
             if (!dummyData.avengers.some(a => a.name === newName)) {
            names.avengers.push({ name: newName, power: newPower }) // Push new object 
            res.status(200).json({ success:true })
            fs.writeFileSync('data/ta11.json',JSON.stringify(names), 'utf-8')
         }
    } else {
        res.status(400).json({ success:false })
        console.log('error')
    }
})

router.get('/', (req, res, next) => {
    res.render('pages/p11', {
        title: 'Prove 11',
        path: '/p11',
    });

});


module.exports = router