const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const students = [
    {
        "id": 1,
        "name": "Aditya",
        "branch": "CSE",
        "semester": 6,
        "cgpa": 8.4
    },
    {
        "id": 2,
        "name": "Riya",
        "branch": "IT",
        "semester": 6,
        "cgpa": 8.9
    },
    {
        "id": 3,
        "name": "Mohit",
        "branch": "ME",
        "semester": 6,
        "cgpa": 7.8
    },
    {
        "id": 4,
        "name": "Priya",
        "branch": "ECE",
        "semester": 6,
        "cgpa": 9.2
    },
    {
        "id": 5,
        "name": "Rahul",
        "branch": "EE",
        "semester": 6,
        "cgpa": 8.1
    },
    {
        "id": 6,
        "name": "Pooja",
        "branch": "CSE",
        "semester": 6,
        "cgpa": 8.5
    },
    {
        "id": 7,
        "name": "Amit",
        "branch": "IT",
        "semester": 6,
        "cgpa": 8.2
    },
    {
        "id": 8,
        "name": "Sneha",
        "branch": "ME",
        "semester": 6,
        "cgpa": 9.1
    },
    {
        "id": 9,
        "name": "Vikas",
        "branch": "ECE",
        "semester": 6,
        "cgpa": 7.9
    },
    {
        "id": 10,
        "name": "Anjali",
        "branch": "EE",
        "semester": 6,
        "cgpa": 8.8
    },
    {
        "id": 11,
        "name": "Sanjay",
        "branch": "CSE",
        "semester": 6,
        "cgpa": 8.3
    },
    {
        "id": 12,
        "name": "Kavya",
        "branch": "IT",
        "semester": 6,
        "cgpa": 9.0
    },
    {
        "id": 13,
        "name": "Rohan",
        "branch": "ME",
        "semester": 6,
        "cgpa": 7.7
    },
    {
        "id": 14,
        "name": "Meera",
        "branch": "ECE",
        "semester": 6,
        "cgpa": 9.3
    },
    {
        "id": 15,
        "name": "Vikram",
        "branch": "EE",
        "semester": 6,
        "cgpa": 8.0
    },
    {
        "id": 16,
        "name": "Nisha",
        "branch": "CSE",
        "semester": 6,
        "cgpa": 8.6
    },
    {
        "id": 17,
        "name": "Arjun",
        "branch": "IT",
        "semester": 6,
        "cgpa": 8.4
    },
    {
        "id": 18,
        "name": "Priya",
        "branch": "ME",
        "semester": 6,
        "cgpa": 7.9
    },
    {
        "id": 19,
        "name": "Deepak",
        "branch": "ECE",
        "semester": 6,
        "cgpa": 9.1
    },
    {
        "id": 20,
        "name": "Aisha",
        "branch": "EE",
        "semester": 6,
        "cgpa": 8.9
    }
]

app.get("/", (req, res) => {
    res.send("REST API using Express.js that manages student CGPA records stored in an in-memory JSON array.");
});

app.get("/students", (req, res) => {
    res.send(students);
    res.status(200);
});

app.get("/students/topper", (req, res) => {

    if (students.length === 0) {
        return res.send("There are no data of the students");
    }

    let max = -Infinity;
    let topper = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].cgpa > max) {
            max = students[i].cgpa;
            topper = students[i];
        }
    }
    res.send(topper);
    res.status(200);
});

app.get("/students/average", (req, res) => {

    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].cgpa;
    }
    let average = total / students.length;
    res.send(average.toFixed(2));
    res.status(200);
})

app.get("/students/count", (req, res) => {
    res.send(students.length);
    res.status(200);
})

app.get("/students/:id", (req, res) => {

    let id = Number(req.params.id);
    let found = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            found = students[i];
        }
    }

    if (found) {
        res.send(found);
        res.status(200);
    } else {
        res.send({ message: "Student not found" });
        res.status(404);
    }
});

app.get("/students/branch/:branchName", (req, res) => {

    let branch = req.params.branchName.toLowerCase();
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].branch.toLowerCase() === branch) {
            result.push(students[i]);
        }
    }

    res.send(result);
    res.status(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port " + (process.env.PORT || 3000));
});