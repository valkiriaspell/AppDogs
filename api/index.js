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
const { conn } = require('./src/db.js');
const {saveTemps} = require ('./src/api-calls/temps.js')

// Syncing all the models at once.
// getTemps();
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, async () => {
//     const preload = await saveTemps()
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, async () => {
    const preload = await saveTemps()
    console.log('El servidor esta escuchando en el puerto 3001'); // eslint-disable-line no-console
  });
});
