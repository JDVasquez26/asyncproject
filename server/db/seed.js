

const {dbConnection, Plant, Site} = require('./index')

const seed = async() => {
    await dbConnection.sync({force: true});
   
    //Plants
    await Plant.create({
       name: "Rubber Plant",
       imageUrl:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71LgKqOVONL._AC_SX466_.jpg",
       amazonLink: "",
       purchased: true,
    });
   
    await Plant.create({
       name:"Sunset Jade Plant",
       imageUrl:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61GzpzR5hBL._AC_SX466_.jpg",
       amazonLink:"https://www.amazon.com/Sunset-Jade-Plant-Crassula-House/dp/B0044FQDRG?ref_=ast_sto_dp",
       purchased: true,
    });
   
    await Plant.create({
       name: "String of Pearls",
       imageUrl:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51azht3fisL._AC_SX466_.jpg",
       amazonLink:"https://www.amazon.com/String-Pearls-Senecio-rowleyanus-Succulent/dp/B07P1CKKT3?ref_=ast_sto_dp",
       purchased: false
    });
   
   
   
    //Sites
    await Site.create({
       name:"Bedroom SouthWest Window",
     
    }),
    await Site.create({
       name: "Entry Hallway",
       
    })
    await Site.create({
       name: "Living Room SouthEast Window",
       
    })
   
    db.close();
    console.log(`
      Seeding successful
    `);
   
   };
   
   seed().catch((err) => {
    db.close();
    console.log(`
    
        Error seeding:
    
        ${err.message}
    
        ${err.stack}
    
      `);
  });
  