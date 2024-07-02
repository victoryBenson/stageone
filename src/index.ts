import express, {Request,Express, Response} from "express";
import cookieParser from 'cookie-parser'

const app: Express = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

const port = 8081
const endpoint = `/api/hello/`

app.get(endpoint, (req:Request, res:Response) => {

    const visitor_name = req.query.visitor_name

    res.json({
        "client_ip": "127.0.0.1",
        "location": "California",
        "greeting": `Hello, ${visitor_name}!, the temperature is 11 degrees Celsius in California`
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})