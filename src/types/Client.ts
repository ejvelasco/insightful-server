import fs from "mz/fs";
import _ from "underscore";

export class Client {
  options: ClientOptions;
  constructor(options: ClientOptions) {
    const defaultOptions = {
      streaming: false,
      apiKey: "",
    } as ClientOptions;
    // @TODO merge options
    this.options = options;
  }
  parseJSONFile = async (fileName: string) => {
    try {
      const data = await fs.readFile(fileName, "utf8");
      const obj = JSON.parse(data);
      return obj;
    } catch (err) {
      // @TODO handle error
      console.log(err);
      return null;
    }
  };
  compareObjects(oldObj: object, newObj: object) {
    const { streaming, apiKey } = this.options;
    const apiKeyExists = true;
    if (apiKey === "" || !apiKeyExists) {
      // @TODO handle bad api key
    }
    if (streaming) {
      // @TODO handle streaming cmp
    } else {
      const result = _.isEqual(oldObj, newObj);
      console.log(result);
      console.log("persisting result!");
    }
  }
  compareFile() {
    console.log("Comparing File!");
  }
}

export interface ClientOptions {
  streaming: boolean;
  apiKey: string;
}
