// Closures encapsulation
const makeNuclearButton = () => {
  let timeWithoutDestrucion = 0;

  const passTime = () => timeWithoutDestrucion++;
  const totalPeaceTime = () => timeWithoutDestrucion;

  const launch = () => {
    timeWithoutDestrucion = -1;
    return "💣";
  };

  setInterval(passTime, 1000);

  return {
    totalPeaceTime,
    //launch, => now is private
  };
};

console.log(makeNuclearButton().totalPeaceTime());
//console.log(makeNuclearButton().launch()); => error
