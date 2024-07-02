import express, {Request,Express, Response} from "express";


const app: Express = express();

app.use(express.json());

const port = 8081
const endpoint = `/api`

app.get(endpoint, (req:Request, res:Response) => {
    res.send({
        "client_ip": "127.0.0.1",
        "location": "California",
        "greeting": "Hello, Victory!, the temperature is 11 degrees Celsius in California"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})