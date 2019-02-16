import { Client } from "./types/Client";

class InsightfulClient extends Client {}

const client = new InsightfulClient();

client.compareFile();
client.compareJSON();