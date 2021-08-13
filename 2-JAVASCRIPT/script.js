function display(userName) {
  document.getElementById("heading").style.visibility = "hidden";
  document.getElementById("form").style.visibility = "hidden";
  document.getElementById("display").innerHTML = "<h1>Welcome to the store, "+userName+"</h1><input type='button' onclick='showTable()' value='Display Items In Store'>"
}

function getConfirmation() {

  var cred = [['PLP','abcd'],['PLP2','abcd'],['Soumya','abcd']];

      var retVal = confirm("Do you want to Submit...?");


      var userName = document.details.userName.value;
      var password = document.details.password.value;

      if(retVal == true){
        var flag = 0;

        for (var i = 0; i < cred.length; i++) {
          if(cred[i][0] === userName && cred[i][1] === password){
            flag=1;
            break
          }
        }
        if(flag === 1){
          display(userName);
        }
        else{
          retVal = confirm("Sorry you have entered incorrect Username or Password\nDo you want to Try again...?");
          if (retVal == true) {
            document.location.href = 'index.html'
          }
        }
  
      }else{
        document.location.href = 'index.html'
      }
}

function showTable() {
  document.getElementById("table").innerHTML = "<table><tr><th>Item name</th><th>Price per Item</th><th>Quantity Available</th><th>Quantity</th></tr><tr><td>Pen</td><td>5</td><td>63</td><td><input type='number' placeholder='Number of pens' id='pen' value=''></td></tr><tr><td>Books</td><td>35</td><td>32</td><td><input type='number' placeholder='Number of books' id='books' value=''></td></tr><tr><td>A4 sheets Bundle</td><td>300</td><td>30</td><td><input type='number' placeholder='Number of Sheet bundles' id='A4Sheets' value=''></td></tr><tr><td>Pencil box</td><td>50</td><td>10</td><td><input type='number' placeholder='Number of pencil box' id='pencilBox' value=''></td></tr></table><input type='button' onclick='readItems();' value='Bill'>";

}

function makePayment() {
  document.write("<h3 style='text-align: center;'>You Payment is Successfull.....!</h3>")
}

function readItems() {
  var pen,books,A4Sheets,pencilBox;
  var totalBill;

  pen = parseInt(document.getElementById('pen').value)
  books = parseInt(document.getElementById('books').value)
  A4Sheets = parseInt(document.getElementById('A4Sheets').value)
  pencilBox = parseInt(document.getElementById('pencilBox').value)

  if(pen > 63 || books > 32 || A4Sheets > 30 || pencilBox > 10){
    document.getElementById('bill').innerHTML = 'Stock is not available';
    exit(0);
  }

  totalBill = 5*pen + 35*books + 300*A4Sheets + 50*pencilBox;

  if(totalBill){
    document.getElementById('bill').innerHTML = 'The total bill is ' + totalBill + '<br><input type="button" value="Make Payment" onclick="makePayment();">';
  }else{
    document.getElementById('bill').innerHTML = 'Please fill all the blocks';
  }
}


// "<table><tr><th>Item name</th><th>Price per Item</th><th>Quantity Available</th><th>Quantity</th></tr><tr><td>Pen</td><td>5</td><td>63</td><td><input type='text' id='pen' value=''></td></tr><tr><td>Books</td><td>35</td><td>32</td><td><input type='text' id='books' value=''></td></tr><tr><td>A4 sheets Bundle</td><td>300</td><td>30</td><td><input type='text' id='A4Sheets' value=''></td></tr><tr><td>Pencil box</td><td>50</td><td>10</td><td><input type='text' id='pencilBox' value=''></td></tr></table>"