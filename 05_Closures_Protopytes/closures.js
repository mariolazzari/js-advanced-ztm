function a() {
  const grandpa = "grandpa";

  const str = "srt";
  console.log("garbage collected:", str);

  return function b() {
    const father = "father";

    return function c() {
      const son = "son";

      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

let res = a();
console.log(res);

res = a()();
console.log(res);

res = a()()();
console.log(res);

const b = a();
console.log(b());
const c = b();
console.log(c());

const boo = string => name => name2 =>
  console.log(`${string} ${name} & ${name2}`);

boo("hi")("Mario")("Mariarosa");
