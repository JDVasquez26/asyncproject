/*
cons express = require('express')
const router = express.Router();
*/
//two lines in one
const router = require('express').Router();
const {Site} = require('../db/index')
//another way to destructure it:
// const obj = require('../db/index');
// const Site = obj.Site;



// GET /api/sites


router.get('/', async (req, res, next) => {
  res.send("FROM SITES");
    // try {
    //   res.send(await Site.findAll());
    // } catch (error) {
    //   next(error);
    // }
  });


//POST /api/genre - get a new site 
router.post('/', async (req, res, next) => {
  try {
    const newSite = await Site.create({name: req.body.name})
    } catch (error) {
      next(error);
    }

});


  module.exports = router;