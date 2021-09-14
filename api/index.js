//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');
const {port, APIKEY} = (process.env || 3001);
const tiposDietas = require('./src/controllers/tiposDeDietas');

// Syncing all the models at once.
conn.sync({ force: true }).then( () => {
  console.log('DB sync')
  server.listen( 3001, async () => {
    console.log(`Server listening at port 3001`); // eslint-disable-line no-console
    const dietQuery = await Diet.findAll();
    if(dietQuery.length) console.log('No Actualiza Diets')
    else if(!dietQuery.length) await Diet.bulkCreate(tiposDietas)
  });
});

