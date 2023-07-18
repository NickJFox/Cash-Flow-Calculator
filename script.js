// this code adds new rows when user clicks the plus button
function addInputRow(button) {
    var container = button.parentElement.parentElement;
    var newRow = document.createElement('div');
  
    if (button.parentElement.classList.contains('input-row')) {
      newRow.classList.add('input-row');
      newRow.innerHTML = `
        <input type="text" name="${button.parentElement.children[0].name}" placeholder="Enter description">
        $<input type="number" class="netIncomeContainer1" name="${button.parentElement.children[1].name}" placeholder="0.00" min="0">
        <button type="button" onclick="addInputRow(this)">+</button>
      `;
    } else if (button.parentElement.classList.contains('input-row2')) {
      newRow.classList.add('input-row2');
      newRow.innerHTML = `
        <input type="text" name="${button.parentElement.children[0].name}" placeholder="Enter description">
        $<input type="number" class="fixedexpenseContainer2" name="${button.parentElement.children[1].name}" placeholder="0.00" min="0">
        <button type="button" onclick="addInputRow(this)">+</button>
      `;
    } else if (button.parentElement.classList.contains('input-row3')) {
      newRow.classList.add('input-row3');
      newRow.innerHTML = `
        <input type="text" name="${button.parentElement.children[0].name}" placeholder="Enter description">
        $<input type="number" class="varexpenseContainer3" name="${button.parentElement.children[1].name}" placeholder="0.00" min="0">
        <button type="button" onclick="addInputRow(this)">+</button>
      `;
    }
  
    if (
      newRow.classList.contains('input-row') ||
      newRow.classList.contains('input-row2') ||
      newRow.classList.contains('input-row3')
    ) {
      // creates the delete button to delete a row
      var deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.textContent = '-';
      deleteButton.onclick = function() {
        deleteInputRow(this);
      };
      newRow.appendChild(deleteButton);
    }
  
    container.appendChild(newRow);
  }
  
  // creates the delete function to remove a row a user added
  function deleteInputRow(button) {
    var row = button.parentNode;
    var container = row.parentNode;
    container.removeChild(row);
    
    
  }
  // this code is the mathmatical operation to add the user inputted numbers and get the net sum ammount
  document.addEventListener("DOMContentLoaded", function() {
    function add_number() {
      var sumButton = document.getElementById("sumButton");
      var resultInput = document.getElementById("Incomeresult");
      var feResultInput = document.getElementById("FEresult");
      var veResultInput = document.getElementById("VEresult");
      var leftOver = document.getElementById("lefttotal");
  
      sumButton.addEventListener("click", function() {
        var container1Elements = document.getElementsByClassName("netIncomeContainer1");
        var container2Elements = document.getElementsByClassName("fixedexpenseContainer2");
        var container3Elements = document.getElementsByClassName("varexpenseContainer3");
        
        var sum1 = calculateSum(container1Elements);
        var sum2 = calculateSum(container2Elements);
        var sum3 = calculateSum(container3Elements);
        
        resultInput.value = sum1;
        feResultInput.value = sum2;
        veResultInput.value = sum3;
        leftOver.value = (sum1 - (sum2 + sum3))
  
  if ((sum1 - (sum2 + sum3)) <= 0) {
    // Displays a message based on leftover sum amount
    document.getElementById("message").textContent = "Lower expenses or increase income.";
  }
  
  if ((sum1 - (sum2 + sum3)) > 0) {
    // Displays a message with an gif based on leftover sum ammount
    document.getElementById("message").innerHTML = "Save, invest, or treat your self. <br> <img src='https://media.tenor.com/i5YlZcK7HhIAAAAC/treat-yo-self-treat-yourself.gif' alt='Image'>";
  }
      });
    }
  // this creates the function to loop through all the numbers the user inputed to sum it all up to be applied to the mathmatical operations above
    function calculateSum(elements) {
      var sum = 0;
  
      for (var i = 0; i < elements.length; i++) {
        var value = parseFloat(elements[i].value) || 0;
        sum += value;
      }
  
      return sum;
    }
  
    add_number();
  });