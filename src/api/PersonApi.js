import { fetchData } from "./ApiUtils";
let url = "/people";

export function findAllPeople() {
  return fetchData(url);
}
