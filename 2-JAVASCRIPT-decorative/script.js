function display(userName) {
  document.getElementById("heading").style.display = "none";
  document.getElementById("pageOne").style.display = "none";
  // document.getElementsByClassName('bg').style.background.color = 'white';
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "lightyellow";
  document.getElementById("welcome").innerHTML = "<h3>Welcome, " + userName + "</h3>";
  showTable();
}

function getConfirmation(){

  var cred = [['PLP','abcd'],['01FE19BCS278','1234'],['C.V.Soumya','1234']];

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
  document.getElementById("table").style.display = 'contents';
}

function makePayment() {
  alert("Payment is Successful");
  document.write("<h3 style='text-align: center; margin: auto;margin: auto; width: 50%; border: 3px solid green; padding: 10px; margin-top: 26%; background-color: bisque;'>Thank you for shopping.....!</h3>")
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