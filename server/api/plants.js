/*
cons express = require('express')
const router = express.Router();
*/
//two lines in one
const router = require('express').Router();
const {Plant} = require('../db/index')


// GET localhost:3001/api/plants
router.get('/', async (req, res, next) => {
    try {
      res.send(await Plant.findAll());
      
    } catch (error) {
      next(error);
    }
  });


//GET localhost:3001/api/plants/:id
router.get('/:id', async (req, res, next) => {
    try {
      res.send(await Plant.findByPk(req.params.id));
    } catch (error) {
      next(error);
    }
  });

// //POST localhost:3001/api/plants
// router.post('/', async (req, res, next) => {
//     try {
//       res.status(201).send(await Plant.create(req.body));
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   // PUT localhost:3001/api/plants/:id
//   router.put('/:id', async (req, res, next) => {
//     try {
//       const plant = await Plant.findByPk(req.params.id);
//       console.log("put id: ", req.params.id)
//       res.send(await plant.update(req.body));
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   // DELETE localhost:3001/api/plants/:id
//   router.delete('/:id', async (req, res, next) => {
//     try {
//       const plant = await Plant.findByPk(req.params.id);
//       await plant.destroy();
//       res.send(todo);
//     } catch (error) {
//       next(error);
//     }
//   });
  


module.exports = router;