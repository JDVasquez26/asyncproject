/*
cons express = require('express')
const router = express.Router();
*/
//two lines in one
const router = require("express").Router();
const { Site, Plant } = require("../db/index");
//another way to destructure it:
// const obj = require('../db/index');
// const Site = obj.Site;

// GET localhost:3001/api/sites
router.get("/", async (req, res, next) => {
  try {
    res.send(await Site.findAll());
  } catch (error) {
    next(error);
  }
});

// GET localhost:3001/api/sites/:id
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await Site.findByPk(req.params.id));
  } catch (error) {
    next(error);
  }
});

// //POST localhost:3001/api/sites
// router.post("/", async (req, res, next) => {
//   try {
//     const site = 
//       await Site.findOrCreate({
//         where: {
//           name: req.body.name,
//         },
//       })
//     const currentPlant = await Plant.findById(req.body.plantId);
//     console.log("magic methods:" , Object.keys(currentPlant.__proto__));
//     await currentPlant.addSite(site[0]);
//     res.json(site[0]);
//   } catch (error) {
//     next(error);
//   }
// });


router.post('/', async (req, res, next) => {
  try{
    res.status(201).send(await Site.create(req.body));
  }catch(error){
    next(error)
  }
})

// // PUT localhost:3001/api/sites/:id
// router.put('/:id', async (req, res, next) => {
//   try {
//     const site = await Site.findByPk(req.params.id);
//     console.log("put id: ", req.params.id)
//     res.send(await site.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

// // DELETE localhost:3001/api/sites/:id
// router.delete('/:id', async (req, res, next) => {
//   try {
//     const site = await Site.findByPk(req.params.id);
//     await site.destroy();
//     res.send(todo);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
