const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
module.exports = mongoose
  .connect("mongodb+srv://admin2:admin@cluster0.apili.mongodb.net/db_consultorio?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => console.warn("ok"))
  .catch((err) => console.warn("erro: ", ));
