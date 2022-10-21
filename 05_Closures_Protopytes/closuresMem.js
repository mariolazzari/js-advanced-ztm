// Closures and memory
function heavyDuty(idx) {
  const bigArray = new Array(7000).fill("😃");
  console.log("Big array created in heavy duty");

  return bigArray[idx];
}

console.log(heavyDuty(688));
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);

// mem optimize
function heavyDuty2() {
  const bigArray = new Array(7000).fill("😃");
  console.log("Big array created in heavy duty 2");

  return idx => bigArray[idx];
}

const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty);
getHeavyDuty(7);
console.log(getHeavyDuty(7));
getHeavyDuty(77);
getHeavyDuty(777);
