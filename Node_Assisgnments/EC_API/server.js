import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        rating: 4.3
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 40,
        rating: 4.5
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "Accessories",
        price: 999,
        stock: 30,
        rating: 4.2
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 12,
        rating: 4.4
    },
    {
        id: 5,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 6,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 7,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 8,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 9,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 10,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 11,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 12,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 13,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 14,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 15,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 16,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 17,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 18,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 19,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
    {
        id: 20,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    },
];

app.get("/", (req, res) => {
    res.status(200).send({ message: "Welcome to the E-Commerce API" });
});


app.get("/products", (req, res) => {
    res.status(200).send(products);
});


app.get("/products/:id", (req, res) => {
    let id = Number(req.params.id);
    let found = null;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            found = products[i];
        }
    }

    if (found) {
        res.status(200).send(found);
    } else {
        res.status(404).send({ message: "Product not found" });
    }
});


app.get("/products/category/:categoryName", (req, res) => {
    let category = req.params.categoryName.toLowerCase();
    let result = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].category.toLowerCase() === category) {
            result.push(products[i]);
        }
    }

    res.status(200).send(result);
});


app.post("/products", (req, res) => {

    let newProduct = {
        id: products.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };

    products.push(newProduct);

    res.status(201).send(newProduct);
});


app.put("/products/:id", (req, res) => {

    let id = Number(req.params.id);
    let found = false;

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === id) {

            products[i] = {
                id: id,
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                stock: req.body.stock,
                rating: req.body.rating
            };

            found = true;
            res.status(200).send(products[i]);
        }
    }

    if (!found) {
        res.status(404).send({ message: "Product not found" });
    }
});


app.put("/products/:id/stock", (req, res) => {

    let id = Number(req.params.id);
    let found = null;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i].stock = req.body.stock;
            found = products[i];
        }
    }

    if (found) {
        res.status(200).send(found);
    } else {
        res.status(404).send({ message: "Product not found" });
    }
});



app.put("/products/:id/price", (req, res) => {

    let id = Number(req.params.id);
    let found = null;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i].price = req.body.price;
            found = products[i];
        }
    }

    if (found) {
        res.status(200).send(found);
    } else {
        res.status(404).send({ message: "Product not found" });
    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port " + (process.env.PORT || 3000));
});