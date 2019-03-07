//contact api and return the data to a workable form

const getAddresses = () => {
    return fetch("http://localhost:8088/addresses")
    .then(response => response.json())
}

//post new address object into the API
//Then return the updated API in workable form
const postAddress = (newAddressObject) => {
    return fetch("http://localhost:8088/addresses", {
        method: "POST",
        body: JSON.stringify(newAddressObject),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}