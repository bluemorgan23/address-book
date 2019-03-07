//This function just renders the "workable code" objects in the array
// returned by our other functions and appends it to the DOM

const listAddressOnDom = addressArray => {
    const container = document.querySelector("#addressList");

    container.innerHTML = "";

    addressArray.forEach(obj => {
    container.innerHTML += `
        <section class="singleAddress">
        <h1 class="name">${obj.name}</h1>
        <p class="address">${obj.address}</p>
        </section>
        `
    });
}