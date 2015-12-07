$(document).ready(function() {
  $("#calculator-body").draggable();

  var total = "";
  var currentNumber = "";
  var operator;
  var operatorChosen = false;
  var decimalAlready = false;

  $("#ac").on("click", function() {
    total = "";
    currentNumber = "";
    operatorChosen = false;
    operator = "";
    $("#output").text(0);
  });

  $("#ce").on("click", function() {
    currentNumber = "";
    operatorChosen = false;
    $("#output").text(0);
  });

  function resetOperator() {
    if (operatorChosen) {
      currentNumber = "";
    }
  };
  
  $("#percent").on("click", function() {
    resetOperator();
    operator = "%";
    operatorChosen = true;
    $("#output").text("%");
  });

  $("#add").on("click", function() {
    resetOperator();
    operator = "+";
    operatorChosen = true;
    $("#output").text("+");
  });

  $("#subtract").on("click", function() {
    resetOperator();
    operator = "-";
    operatorChosen = true;
    $("#output").text("-");
  });

  $("#divide").on("click", function() {
    resetOperator();
    operator = "/";
    operatorChosen = true;
    $("#output").text("/");
  });

  $("#multiply").on("click", function() {
    resetOperator();
    operator = "*";
    operatorChosen = true;
    $("#output").text("*");
  });

  $("#decimal").on("click", function() {
    if (operatorChosen && !decimalAlready) {
      currentNumber += ".";
      $("#output").text(currentNumber);
    } else if (!decimalAlready) {
      total += ".";
      $("#output").text(total);
    }
    decimalAlready = true;
  });

  $("#equals").on("click", function() {
    var truncatedTotal;
    total = eval(total + operator + currentNumber);
    var totalDigits = total.toString().length;
    if (totalDigits > 12) {
      truncatedTotal = total.toString().slice(0, 12);
    } else {
      truncatedTotal = total;
    }
    decimalAlready = false;
    $("#output").text(truncatedTotal);
  });

  for (var i = 0; i < 10; i++) {
    $("#" + i).on("click", function() {
      if (total === "" && !operator) {
        total = this.id;
        $("#output").text(total);
      } else if (total !== "" && !operator) {
        total += this.id;
        $("#output").text(total);
      } else if (operator) {
        currentNumber += this.id;
        $("#output").text(currentNumber);
      }
    });
  }
});