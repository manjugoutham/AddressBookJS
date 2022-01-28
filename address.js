/**
 * Ability to create a Address Book Contact with first and last names,
 * address, city, state, zip, phone number and email.
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} email 
 * @param {*} number 
 * @param {*} zipcode 
 * @param {*} address 
 * @param {*} city 
 * @param {*} state 
 * @returns 
 */
 function addPerson(firstName, lastName, email, number, zipcode, address, city, state) {
       console.log(firstName + "\n" + lastName + "\n" + email + "\n" + number + "\n" + zipcode + "\n" + address + "\n" + city + "\n" + state);
}

addPerson("Goutham", "Raj", "gouthamy21@gmail.com", "8105457612", 560077, "near RTNagar", "Bengaluru", "Karnataka")


/**
 * Ability to ensure Valid Contacts are added.
 */

let Firstnameformat = /[A-Z]{1}[a-z]{2,}/;
var Lastnameformat = /[A-Z]{1}[a-z]{2,}/;
var emailformat = /^[A-Za-z0-9.+-]+@[a-z0-9]+[.][a-z]+$/;
var Phonenumber = /(91)?[6-9][0-9]{9}/;
var zipnumber = /[0-9]{5,15}$/;
var addressregex = /[A-Za-z]{4,}/;
var cityregex = /[A-Za-z]{4,}/;
var stateregex = /[A-Za-z]{6,}/;



function ValidatefName(firstName)
{
if(Firstnameformat.test(firstName))
{
    console.log(firstName);
}else{
    console.log("Invalid");
}
}
ValidatefName("gou");


function ValidatelastName(lastName)
{

if(Lastnameformat.test(lastName))
{
    console.log(lastName);
}else{
    console.log("Invalid");
}
}

ValidatelastName("Raj");
ValidatelastName("raj");

function Validateemail(email)
{

if(emailformat.test(email))
{
    console.log(email);
}else{
    console.log("Invalid");
}
}

Validateemail("Goutham12@gmail.com");
Validateemail("Goutham12@com");


function ValidatePhonenumber(number)
{

if(Phonenumber.test(number))
{
    console.log(number);
}else{
    console.log("Invalid");
}
}

ValidatePhonenumber("9876543212");
ValidatePhonenumber(76543);

function ValidateZipcode(zipcode)
{


if(zipnumber.test(zipcode))
{
    console.log("The zip code is: " + zipcode);
}else{
    console.log("Invalid");
}
}

ValidateZipcode("46037");
ValidatePhonenumber(76543);

function Validateaddress(address)
{

if(addressregex.test(address))
{
    console.log(address);
}else{
    console.log("Invalid");
}
}
Validateaddress("Banglore");
Validateaddress("Ban");

function Validatecity(city)
{

if(cityregex.test(city))
{
    console.log(city);
}else{
    console.log("Invalid");
}
}
Validateaddress("Kolar");
Validateaddress("kol");

function Validatecity(city)
{

if(cityregex.test(city))
{
    console.log(city);
}else{
    console.log("Invalid");
}
}
Validateaddress("Kolar");
Validateaddress("kol");

function Validatestate(state)
{

if(stateregex.test(state))
{
    console.log(state);
}else{
    console.log("Invalid");
}
}
Validateaddress("Karnataka");
Validateaddress("Karnataka");


/**
 * Ability to create a New Address Book
 * array and add new Contacts to it
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} email 
 * @param {*} number 
 * @param {*} zipcode 
 * @param {*} address 
 * @param {*} city 
 * @param {*} state 
 * @returns 
 */
function addPerson(firstName, lastName, email, number, zipcode, address, city, state) {
    // if (Firstnameformat.test(firstName) && Lastnameformat.test(lastName) && emailformat.test(email) && Phonenumber.test(number) && zipnumber.test(zipcode) && addressregex.test(address) && cityregex.test(city) && stateregex.test(state)) {
    //    console.log(firstName + "\n" + lastName + "\n" + email + "\n" + number + "\n" + zipcode + "\n" + address + "\n" + city + "\n" + state);
    return [firstName, lastName, email, number, zipcode, address, city, state];
    }
    let array = new Array(addPerson("Harish", "Raj", "gouthamy21@gmail.com", "8105457612", 560077, "near RTNagar", "Kolar", "Karnataka"),addPerson("Goutham", "Raj", "gouthamy21@gmail.com", "8105457612", 560077, "near RTNagar", "Banglore", "Karnataka"));
    console.log(array);


 
/**
 * 
 * @purpose : Ability to find existing contact person using their name and edit it 
 */    
//......UC4...........
console.log("edit........");
function editperson(Array,firstName,newFirstName)
{
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
            if(element[index] == firstName){
            element[index] = newFirstName;
            }            
    }  
}
editperson(array,"Harish","Smith");
console.log(array);

//.........UC5........

/**
 * Ability to find a person with name delete it from the array
 */
console.log("delete..........");
function deleteperson()
{
    var originaldata = array[0].indexOf("Harish");
    console.log("...........*.......",originaldata);
    array.splice(originaldata,1);
    //console.log(array);  
}
deleteperson();
console.log(array);

//..........UC6.........

function countContacts(){
     let count= array.reduce((x) => x).length;
     console.log("Number of contacts is: " +count);
    console.count(count);
 }
 countContacts();

/**
 * Ability to ensure there is no Duplicate Entry of the same Person in the Address Book
 */

 function duplicatevalues()
 {
 console.log("Using HashMap");
var map = new Map();
map = [array];
let duplicates = map.filter((firstName, index) => {
  return map.indexOf(firstName) !== index;
});
}
duplicatevalues();
//console.log(map);

/**
 * Ability to view Persons by City or State
 */

console.log("...........UC8.......");
function searchByCityOrState(contactArray,cityorstate){
    if(cityorstate == "Banglore"){
        console.log("Contact by city");
       return contactArray.filter(firstName =>firstName[6] == cityorstate);

    }
}
console.log(searchByCityOrState(array,'Banglore'));

/**
 * Ability to view Persons by City or State
 */
//........UC9...............
console.log("Presentinstate uc9");
    function presentInState(contactArray,cityorstate){
        if(cityorstate == "Karnataka"){
            console.log("Contact by state : ");
           return contactArray.filter(firstName =>firstName[7] == cityorstate);
    
        }
  }
 console.log(presentInState(array,"Karnataka"));