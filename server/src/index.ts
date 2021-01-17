import app from './app';
import connection from './config/database.config';

connection.then(() => {
  app.listen(3000, () => {
    console.log('Listening 3000');
  });
});
