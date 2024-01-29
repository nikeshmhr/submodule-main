import { sum } from "sub";

function main() {
  console.log("this is the main functon");
  console.log('summing 9+1 using submodule "sub"');
  console.log(sum(9, 1));
}

main();
