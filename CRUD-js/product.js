var URL = "https://localhost:5000/api/Products"

function getProduct(productId) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(this.readyState === XMLHttoRequest.DONE && this.status===200) {
            setInput(JSON.parse(this.response));
            displayDetail();
        }
    }
    req.open("GET", URL + "/" + productId);
    req.send();
}

function displayDetail() {
    console.log("Not implemented!");
}

function setInput() {
    console.log("Not implemented!");
}