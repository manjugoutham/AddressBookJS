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