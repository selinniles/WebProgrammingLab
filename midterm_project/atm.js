var withdraw_money=0;
var money=0;
var counter_pin=5;
var total=2000;

function dis(id,val) {   //function to show the input numbers
  document.getElementById(id).value += val;
}
function dlt(id) {  //function for delete button
  document.getElementById(id).value = document.getElementById(id).value.slice(0,-1);
}
function enter_account(id) {   //function to see if the account number is valid
  if (document.getElementById(id).value == '1234567890123456') {
    document.getElementById('acc_number').style.display  = "none";
    document.getElementById('pin_main').style.display  = "block";
  }
  else {
    alert("This account number does not exist.");
  }
  document.getElementById('acc').value = "";
}
function enter_pin(id) {   //function to see if password matches
  if (document.getElementById(id).value == '7665') {
    document.getElementById('pin_main').style.display  = "none";
    document.getElementById('welcome').style.display  = "block";
    document.getElementById('current_balance').innerText = total;  //show total balance
  }
  else {  //if wrong input of PIN
    counter_pin -= 1;
    if (counter_pin == 0) {   //if you use all 5 attempts with wrong PIN it returns the card
      alert("You have used all 5 attemps. Returning your card.");
      new_page('pin_main','acc_number');
    }

    else {  //to show how many attempts left
    alert("Incorrect PIN. You have " + counter_pin + " attempts left.");
    }
  }
  document.getElementById('pin').value = "";
  document.getElementById('time_s').innerText = new Date();  //get the time for login
  document.getElementById('total').innerText = total;
}
function withdraw_quick(val) {  //function for quick links of withdraw
  if (total-parseInt(val)<0) {  //check if the user has enough money
    alert("Not enough money to withdraw");
  }
  else {  //else withdraw
    document.getElementById('w_money').innerText = val;
    document.getElementById('w_main').style.display = "none";
    document.getElementById('check').style.display = "block";
  }
}

function success(id,amount) {  //function to create the account info list
  // I GOT HELP FROM https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow for this part
  var table = document.getElementById('my_table');
  var row = table.insertRow(-1);  //inert a new row at the end of table
  row_length  = table.rows.length;  // get row length
  if (row_length % 2 != 0) {   //change background color for the new row
    row.style.backgroundColor = "#FFFFFF";
  }
  else {
    row.style.backgroundColor = "#D3DBE0"
  }
  var cell1 = row.insertCell(0);   //insert cells for time-funds out-funds in-total balance
  cell1.style.paddingLeft = "10px";
  var cell2 = row.insertCell(1);
  cell2.style.paddingLeft = "600px";
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  // I got help from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow for this part
  cell1.innerHTML = new Date();  //get time of action
  if (id=='fundout') {  //if the action is withdraw or transfer
    cell2.innerHTML = document.getElementById(amount).innerText;
    cell3.innerHTML = "0";
    total -=parseInt(document.getElementById(amount).innerText);
  }
  else if (id == 'fundin') {  //if the action is depositing the money
    cell3.innerHTML = document.getElementById(amount).innerText;
    cell2.innerHTML = "0";
    total +=parseInt(document.getElementById(amount).innerText);
  }
  cell3.style.paddingRight = "50px";
  document.getElementById('current_balance').innerText = total;
  cell4.innerHTML = document.getElementById('current_balance').innerText ;
}

function withdraw(id,val) {
  withdraw_money += parseInt(val);
  if (withdraw_money < 0) {
    alert("Wrong input.")
    withdraw_money = 0;
  }
  if (withdraw_money > 300) {  //the maximum limit for withdraw is 300
    alert("$300 is the limit to withdraw from the ATM.");
    withdraw_money = 0;
  }
  if (total-withdraw_money<0) {  //to check if the user has enough money
    alert("Not enough money to withdraw.");
  }
  else {   //else withdraw
    document.getElementById(id).value = withdraw_money;
  }
}
function show_withdraw(id) {  //function to ask the user to approve the withdraw
  document.getElementById(id).innerText = withdraw_money;
  document.getElementById('w_main').style.display = "none";
  document.getElementById('check').style.display = "block";
  withdraw_money = 0;
}

function show_deposit(id1,id2) {  //function to approve the deposit
  money=document.getElementById(id1).value;
  if (money % 10 != 0) {  //the user can only deposit 10 and its multipliers
    alert("You can deposit only 10 and multiplies of 10.");
    document.getElementById(id1).value ="";
  }
  else {  //deposit money and go to new page to ask
    document.getElementById(id2).innerText = money;
    new_page('deposit_main','dinfo');
    money=0;
  }
}
function show_transfer(id1,id2) {  //function to approve the transfer
  money=document.getElementById(id1).value;
  if (total-money<0) {  //if balance is not enough
    alert("Not enough money to transfer.");
    document.getElementById(id1).value = "";
    money=0;
  }
  else {  //else do the money transfer
    document.getElementById(id2).innerText = money;
    new_page('t_main','transfer_check');
    money=0;
  }
}

function no(id1,id2,id3) {  //if the user changes his/her mind and goes back to the main withdraw page
  document.getElementById(id1).style.display = "none";
  document.getElementById(id2).style.display = "block";
  withdraw_money=0;
  document.getElementById(id3).value = "0";
}
function new_page(id1,id2) {  //function to go to a new page and reset everything
  document.getElementById('w_inp').value = "0";
  document.getElementById(id1).style.display = "none";
  document.getElementById(id2).style.display = "block";
  document.getElementById('pin').value = "";
  document.getElementById('acc').value = "";
  document.getElementById('deposit').value = "";
  document.getElementById('transfer').value = "";
}
