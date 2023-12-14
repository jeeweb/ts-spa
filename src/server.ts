import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const PORT = 3000;
const __dirname = path.resolve();

app.use("/", express.static("dist"));
app.use("/public", express.static("public"));
//app.use("/src", express.static(path.join(__dirname, "src")));

app.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
