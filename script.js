document.addEventListener("DOMContentLoaded", () => {
  const res = document.getElementById("result");

  function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      res.value = "Can't divide 0 with 0";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
  }

  // Displays entered value on screen.
  function liveScreen(enteredValue) {
    if (!res.value) {
      res.value = "";
    }
    res.value += enteredValue;
  }

  // adding event handler on the document to handle keyboard inputs
  document.addEventListener("keydown", keyboardInputHandler);

  // function to handle keyboard inputs
  function keyboardInputHandler(e) {
    // to fix the default behavior of browser,
    // enter and backspace were causing undesired behavior when some key was already in focus.
    e.preventDefault();
    // grabbing the liveScreen

    // numbers
    if (e.key >= "0" && e.key <= "9") {
      res.value += e.key;
    }

    // operators
    if (["+", "-", "*", "/"].includes(e.key)) {
      res.value += e.key;
    }

    // decimal key
    if (e.key === ".") {
      res.value += ".";
    }

    // press enter to see result
    if (e.key === "Enter") {
      calculate(res.value);
    }

    // backspace for removing the last input
    if (e.key === "Backspace") {
      const resultInput = res.value;
      // remove the last element in the string
      res.value = resultInput.substring(0, res.value.length - 1);
    }
  }

  // expose functions to global scope
  window.liveScreen = liveScreen;
  window.calculate = calculate;
});
