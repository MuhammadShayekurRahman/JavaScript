"use strict";

    // https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json

    const outputDiv = document.querySelector("#output");


    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
        .then(response => {
            console.log("Res:", response)

           // document.write("Home Town: ", response.data.homeTown);
          //  document.write(response.data.members[0].name);

            let i = 0;
            for(i=0; i<response.data.members.length; i++){
                //document.write(response.data.members[i].name);
                const member = document.createElement("p");
                member.innerText = "[Name]= " + response.data.members[i].name +" [Secret Identity]="+ response.data.members[i].secretIdentity;
                outputDiv.appendChild(member);
            }
        })
        .catch(error => console.error(error))

        