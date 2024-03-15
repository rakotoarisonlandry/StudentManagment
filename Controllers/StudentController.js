import { db } from "../db.js";
export const addStudent = (req, res) => {
  const q =
    "INSERT INTO student (`num_matricule`, `name`, `note_math`,`note_pc`) VALUES (?)";

  const values = [
    req.body.num_matricule,
    req.body.name,
    req.body.note_math,
    req.body.note_pc,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been created !");
  });
};

export const getStudents = (req, res) => {
  const q = req.query.num_matricule
    ? "SELECT * FROM student WHERE num_matricule=?"
    : "SELECT * FROM student";

  db.query(q, [req.query.num_matricule], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getStudent = (req, res) => {
  const q = "SELECT * FROM student  WHERE num_matricule =?";
  db.query(q, [req.params.num_matricule], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const updateStudent = (req, res) => {
  const postId = req.params.num_matricule;

  const q =
    "UPDATE student SET `name`=? ,`note_math`=?, `note_pc`=? WHERE `num_matricule`=?";

  const values = [req.body.name, req.body.note_math, req.body.note_pc];

  db.query(q, [...values, postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been Updated! ");
  });
};

export const deleteStudent = (req, res) => {
  const postId = req.params.num_matricule;
  const q = "DELETE FROM student WHERE `num_matricule`=?";
  db.query(q, [postId], (err, data) => {
    if (err) return res.status(403).json("You can delete only your post");
    return res.json("post has been deleted!");
  });
};
