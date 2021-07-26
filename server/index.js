const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./services/passport');
require('./models/User')

const mongoAtlasUri = keys.mongoURI;
try {
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to mongoDB')
  );
} catch (e) {
  console.log('could not connect', e);
}

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//mongodb+srv://david-dev:<password>@cluster0.6rzt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
