import { ADDRESS, PORT, PATH } from "./constant";

export default function getURL() {
  const url = `${ADDRESS}:${PORT}${PATH}`;
  return url;
}
