require("dotenv").config({ path: "./config.env" });

const express = require("express");
const path = require ('path');
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use("/api/v1/posts", postRoutes);
if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(_dirname, "/e-commerce-frontend/build")));
app.get("*", (req, res) => {
res.sendFile(path.join(_dirname, "e-commerce-frontend", "build", "index.html"));
})
} else {
app.get("/", (req, res) => {
res.send("Api runnning");
});
}
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
