import { createApp } from "./app";
import "dotenv/config";

const app = createApp();

const port = 3000;

app.get("/ping", (_, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`server is runnig on port : ${port}`);
});
