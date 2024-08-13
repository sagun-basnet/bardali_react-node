import db from "../db.js";
export const post = (req, res) => {
  const data = req.body;

  const sql = "Insert into user(`name`, `email`, `password`) value(?,?,?)";

  db.query(sql, [data.name, data.email, data.password], (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
};
