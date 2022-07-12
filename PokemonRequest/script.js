"use strict";

    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => {
            console.log(response)

            document.write("Name:", response.data.name, " # Height: ", response.data.height);

        })
        .catch(error => console.error(error))