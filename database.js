const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(
      `mongodb+srv://santiadmin:1t9KPgar81VZuN7L@cluster0-6chk9.mongodb.net/graphqlBooking?retryWrites=true&w=majority`
    )
    .then(() => {
      app.listen(3000);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnect;
