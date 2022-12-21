const PORT = process.env.PORT || 3001;
const app = require('./app');
const { dbConnection } = require('./db/index');

const init = async () => {
    try {
        await dbConnection.sync().then(() => {
            app.listen(PORT, () =>
              console.log(`
                Listening on Port ${PORT}
                http://localhost:${PORT}/
                `)
            );
          });
      } catch (err) {
        console.log(`There was an error starting up!`, err);
      }
  };
  
  init();
