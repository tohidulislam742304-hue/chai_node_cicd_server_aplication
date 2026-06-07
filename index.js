import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    return res.json({ message: "Server is healthy v3.1 " status: 'good ' })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});