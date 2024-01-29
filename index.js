import { sum, sub } from "sub";

function main() {
  console.log("this is the main functon");
  console.log('summing 9+1 using submodule "sub"');
  console.log(sum(9, 1));

  console.log('subtracting 9-1 using submodule "sub"');
  console.log(sub(9, 1));
}

main();
