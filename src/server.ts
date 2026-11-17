import express, { json, type Application, type Request, type Response } from "express";
const app: Application = express();
app.use(express.json())
const PORT = 5000;


app.get("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).json({id: 101, author: "Araf", designation: "Jr. SWE"});
})

app.listen(PORT, () => {
    console.log(`Here is your new Express Server running on ${PORT} port!!!`);
    console.log(`Here is your new Express Server running on ${PORT} port!!!`);
    console.log(`Here is your new Express Server running on ${PORT} port!!!`);
    console.log(`Here is your new Express Server running on ${PORT} port!!!`);
})