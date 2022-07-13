"use strict";

    const outputDiv = document.querySelector("div#output");
    const search = document.querySelector("input#searchKing");
    const searchHouse = document.querySelector("input#searchHouse");
    
        const findKing = () => {

            console.log("SEARCH: ", search.value);
            axios.get( "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
            .then(response =>{
                console.log(response);

               
                for(let i=0; i<response.data.length; i++){
                    if(search.value.toLowerCase() === response.data[i].nm.toLowerCase()){
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

        const findHouse = () => {

            console.log("SEARCH: ", searchHouse.value);
            axios.get( "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
            .then(response =>{
                console.log(response);

               
                for(let i=0; i<response.data.length; i++){
                    
                    
                    if(searchHouse.value.toLowerCase() === response.data[i].hse.toLowerCase()){
                        //document.write(response.data[i].nm)
                        const king = document.createElement("p")
                        king.innerText = "Name = [" +response.data[i].nm +"] Country = [" + response.data[i].cty+"] House = [" + response.data[i].hse+"] Reign = [" + response.data[i].yrs + "]";
                        outputDiv.appendChild(king);
                        //return;
                    }

                    

                }
               // document.write("fail")
            })
            .catch(error => console.error(error))
        }