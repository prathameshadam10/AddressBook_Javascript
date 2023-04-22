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
        return this.firstName;
     }
     get lastName(){
        return this.lastName;
     }
     get address(){
        return this.address;
     } get city(){
        return this.city;
     }
     get state(){
        return this.state;
     }
     get zip(){
        return this.zip;
     }
     get phone(){
        return this.phone;
     }
     get email(){
        return this.email;
     }
     
     set firstName(firstName){
        return this.firstName = firstName;
     }
     set lastName(lastName){
        return this.lastName = lastName;
     }
     set address(address){
        return this.address = address;
     }
      set city(city){
        return this.city = city;
     }
     set state(state){
        return this.state = state;
     }
     set zip(zip){
        return this.zip = zip;
     }
     set phone(phone){
        return this.phone = phone;
     }
     set email(email){
        return this.email = email;
     }
     toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phone + ", Email : "+ this.email;
    }
}

    let contact = new Contact("Prathamesh", "Adam", "Kuchan Nagar", "Solapur", "Maharastra", "413005", "8983930906", "prathamadam10@gmail.com" )
     console.log(contact.toString());
     
