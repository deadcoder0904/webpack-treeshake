import map from "lodash-es/map";

import { sum } from "./math";

console.log("💩");

console.log(`2 + 3 = ${sum(2, 3)}`);

map([1, 2, 3], x => {
  console.log(x);
});
