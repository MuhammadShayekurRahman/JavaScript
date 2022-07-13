"use strict";

const output = document.querySelector("div#output");

document.querySelector("body > form").addEventListener("submit", function(event){
    event.preventDefault();

    console.log("This:", this);

    const data = {
        make: this.make.value,
        model: this.model.value,
        type: this.type.value,
        electric: this.electric.value
    }

    console.log("data:", data);

    axios.post("http://localhost:8080/createCar", data)
        .then(response => {
            console.log("Res:", response)
            this.reset();
            this.make.focus();
            renderCars();
        })
        .catch(error => console.error(error))
})

function renderCars(){
    axios.get("http://localhost:8080/listAll")
        .then(response => {
            console.log(response);
            
            output.innerHTML = "";

            for(let car of response.data){
                const carEntry = document.createElement("p");
                carEntry.innerText = car.make + " model: [" + car.model + "] type: [" + car.type + "] electric: [" + car.electric + "]";
                output.appendChild(carEntry);

                const carDelete = document.createElement("button");
                carDelete.innerText = "Scrap Car";
                carDelete.addEventListener("click", () =>{
                    deleteCar(car.id);
                })
                output.appendChild(carDelete);
            }

        })
        .catch(error => console.error(error))
}

const deleteCar = (id) =>{
    axios.delete("http://localhost:8080/removeCar/" + id)
        .then(response => {

            console.log("delete successful")
            renderCars();

        })
        .catch(error => console.error(error))
}

renderCars();