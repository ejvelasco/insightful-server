import path from "path";
import { Client, ClientOptions } from "./types/Client";

class InsightfulClient extends Client {}

const options = {
  streaming: false
} as ClientOptions;
const client = new InsightfulClient(options);

// client.compareJSON();
async function example() {
  const oldObj = await client.parseJSONFile(path.join(__dirname, "../example/old.json"));
  const newObj = await client.parseJSONFile(path.join(__dirname, "../example/new.json"));
  client.compareObjects(oldObj, newObj);
}

example();
