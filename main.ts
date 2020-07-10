import { Customer } from './customer';
import * as Helpers from './utility';
 import { SalesRap } from './salesRap';

const customer: Customer = new Customer();
const sales: SalesRap = new SalesRap();
document.getElementById('loadInfo')!.addEventListener('click', () => {
  
var email = (<HTMLInputElement>(document.getElementById('email'))).value
var forename = (<HTMLInputElement>(document.getElementById('forename'))).value
var surname = (<HTMLInputElement>(document.getElementById('surname'))).value


if ((forename.length == 0 || forename.length < 1) || (surname.length == 0 || surname.length < 2)) {
  console.error("Make sure you fill all the required field and Note forenames contains one or more characters and Surname two or more");
}
else {
  if ( ValidateEmail(email)) {
      customer.forename = Helpers.getValue('forename');
      customer.nickname= Helpers.getValue('nickname');
      customer.surname = Helpers.getValue('surname');
      customer.emailAddress = Helpers.getValue('email');
      customer.role = Helpers.getValue('role');
      customer.dateCreated = new Date();
      console.log(customer.dateCreated);
      customer.firstName();
      customer.fullName();
      sales.customers = [customer.forename, customer.nickname, customer.surname, customer.emailAddress, customer.role];
      console.log(sales.customers);
  }

}
  
});
  

document.getElementById('isLocked')!.addEventListener('click', () => {
  var element = <HTMLInputElement> document.getElementById("loadInfo");
  var checkBox = <HTMLInputElement>document.getElementById("isLocked");
  element.disabled = !checkBox.checked;
  checkBox.onclick = () => {
    element.disabled = !checkBox.checked;
    customer.locked = true;
  }
  customer.locked = false;
});


//Validate password
function ValidatePassword(password: String) { 
  var pass = /^[A-Za-z]\w{4,14}$/;
  if (password.match(pass))
  {
    console.log("Validated");
    return true;
  }
  else {
    console.error('Incorect password! make sure you include special character,aphabet,numeric values and contain 4 to 14 characters');
    return false;
  }
}
//Validate Email
function ValidateEmail(emailText:string)
{
  //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var mailformat=/^(?=[^@]{4,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/
if(emailText.match(mailformat))
{
  console.log("Validated");
return true;
}
else
{
  console.error("You have entered an invalid email address! make sure it contans four or more character long");
return false;
}
}
