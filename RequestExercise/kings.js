"use strict";

    const outputDiv = document.querySelector("div#output");
    const search = document.querySelector("input#searchKing");
    
        const findKing = () => {

            console.log("SEARCH: ", search.value);
            axios.get( "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
            .then(response =>{
                console.log(response);

               
                for(let i=0; i<response.data.length; i++){
                    if(search.value === response.data[i].nm){
                        //document.write(response.data[i].nm)
                        const king = document.createElement("p")
                        king.innerText = "Name = [" +response.data[i].nm +"] Country = [" + response.data[i].cty+"] House = [" + response.data[i].hse+"] Reign = [" + response.data[i].yrs + "]";
                        outputDiv.appendChild(king);
                        return;
                    }
                }
                document.write("fail")
            })
            .catch(error => console.error(error))
        }