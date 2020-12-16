import { resolve } from "uri-js";
import { reject } from "rsvp";

const data = [
  {
    id: 0,
    entry: "Contact",
    email: "Steve@gmail.com"
  }
];

const getJSON = url => {
  return new Promise((resolve, reject) => {
    return resolve(data);
  });
};

export default getJSON;
