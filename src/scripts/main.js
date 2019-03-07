// Create variable to represent the button
const button = document.querySelector("#saveEntry");
//getAddresses function pulls data from the API and returns it 
//in a workable form which is then rendered to the dom by
//the listAddressOnDom
getAddresses().then(parsedResponse => listAddressOnDom(parsedResponse));

//eventListener for clicking on Save Address button
button.addEventListener("click", function () {

//Create object formatted to store the data input by the user

    const personName = document.querySelector("#fullName");
    const personAddress = document.querySelector("#address");

    let newAdressBookEntry = {
        name: personName.value,
        address: personAddress.value
    };

//Post address pushes the object into the API, then after that happens
//we do another fetch call with get Addrresses including the updated
//object. We then take that workable data and list in on the dom with
// listAddressOnDom
   postAddress(newAdressBookEntry)
   .then(() => getAddresses())
   .then(parsedResponse => listAddressOnDom(parsedResponse));
   
    document.querySelector("#inputField").reset();
   
})