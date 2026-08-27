const db = require("../config/db");

const createMessage = (data, callback) => {
  const query = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(query, [data.name, data.email, data.subject, data.message], (err, results) => {
    if (err) {
      console.error("Error saat insert ke tabel contacts:", err);
    }
    callback(err, results);
  });
};

const getAllMessages = (callback) => {
  const query = "SELECT * FROM contacts ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error saat mengambil data contacts:", err);
    }
    callback(err, results);
  });
};

module.exports = {
  createMessage,
  getAllMessages,
};
