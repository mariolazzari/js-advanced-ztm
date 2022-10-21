let view;

const initialize = () => {
  view = "👁️";
  console.log("View init", "💩");
};

initialize();
initialize();
initialize();
console.log(view);

// closure
const initialize2 = () => {
  const view = "👀";
  console.log("View init2", "💩");

  return () => {
    return view;
  };
};

const myInit = initialize2();

view = myInit();
view = myInit();
view = myInit();
console.log(view);
