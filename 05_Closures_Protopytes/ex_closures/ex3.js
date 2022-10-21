const nums = [1, 2, 3, 4];

for (var i = 0; i < nums.length; i++) {
  setTimeout(function () {
    console.log(`I'm at index ${i} (var)`);
  }, 1000);
}

for (var i = 0; i < nums.length; i++) {
  (i => {
    setTimeout(function () {
      console.log(`I'm at index ${i} (var closure iife)`);
    }, 2000);
  })(i);
}

for (let i = 0; i < nums.length; i++) {
  setTimeout(function () {
    console.log(`I'm at index ${i} (let)`);
  }, 3000);
}
