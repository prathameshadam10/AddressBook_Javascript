class Contact {
    firstName
    lastName
    address
    city
    state
    zip
    phone
    email

    constructor(firstName, lastName, address, city, state, zip, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    get firstName(){
        return this._firstName;
     }
     get lastName(){
        return this._lastName;
     }
     get address(){
        return this._address;
     } get city(){
        return this._city;
     }
     get state(){
        return this._state;
     }
     get zip(){
        return this._zip;
     }
     get phone(){
        return this._phone;
     }
     get email(){
        return this._email;
     }
     
     set firstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else
        throw "First Name is Incorrect!!!!!!!!";
        
     }
     set lastName(lastName){
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else
        throw "Last Name is Incorrect!!!!!!!!";
     }
     set address(address){
        let addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
        if(addressRegex.test(address))
        this._address = address;
        else
        throw "Address is Incorrect!!!!!!!!";
     }
      set city(city){
        let cityRegex = RegExp('^[a-zA-Z]{3,}$');
        if(cityRegex.test(city))
        this._city = city;
        else
        throw "City is Incorrect!!!!!!!!";
     }
     set state(state){
        let stateRegex = RegExp('^[a-zA-Z]{3,}$');
        if(stateRegex.test(state))
        this._state = state;
        else
        throw "State is Incorrect!!!!!!!!";
     }
     set zip(zip){
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else
        throw "Zip Code is Incorrect!!!!!!!!";
     }
     set phone(phone){
        let phoneRegex = RegExp('^[0-9]{2}\\s{1}[0-9]{10}$');
        if(phoneRegex.test(phone))
        this._phone = phone;
        else
        throw "Phone is Incorrect!!!!!!!!";
     }
     set email(email){
        let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
        if(emailRegex.test(email))
        this._email = email;
        else
        throw "Email is Incorrect!!!!!!!!";
     }
     toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phone + ", Email : "+ this.email;
    }
}
    let addressBookArray = new Array();

   function contactExists(firstName, lastName){
      return addressBookArray.some(contact => contact.firstName = firstName && contact.lastName == lastName);
   }

   function editContact(firstName, lastName, property, newValue) {
      if (contactExists(firstName, lastName)) {
          switch (property) {
              case "address":
                  addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                  break;
              case "city":
                  addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                  break;
              case "state":
                  addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                  break;
              case "zip":
                  addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                  break;
              case "phoneNumber":
                  addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                  break;
              case "email":
                  addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                  break;
              default:
                  console.log("Enter valid property");
          }
      }
      else {
          console.log("Contact Does Not Exist");
      }
  }
  function deleteContact(firstName, lastName){
   if(contactExists(firstName, lastName)){
       addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
   }else{
       console.log("Contact Does Not Exist");
   }
}
function getCountOfContacts(count) {
   count += 1;
   return count;
}
function addContact(contact) {
   if (!contactExists(contact.firstName, contact.lastName))
       addressBookArray.push(contact);
   else
       throw "Contact is Present in the Address Book";
}
console.log("\nAdding Duplicate Contact");
try {
    addContact(secondContact);
    addContact(firstContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);
