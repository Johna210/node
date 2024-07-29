const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://solomonjohna21:JS1vYwdkPKaLvItB@cluster0.x2lmk5s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
    .then((client) => {
      console.log('Connected!');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
