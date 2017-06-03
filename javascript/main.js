
application = (service) => {

    let main = this;

    service.weatherDate.getLastYear().then((response) => {
        // console.log(response);
        main.displayDatesToDataDiv(response);
    });

    displayDatesToDataDiv = (dataArray) => {
        let dataDiv = document.getElementById('data');
        if (dataArray) {
            for (let x=0; x < dataArray.length; x++) {
                let chunkDate = new Date(dataArray[x].date);
                let chunkTemp = dataArray[x].temperature;
                let chunkContent = "Date: " + main.getPrettyDate(chunkDate) + " | Temperature: " + chunkTemp;


                let chunkDiv = document.createElement("DIV");
                chunkDiv.innerHTML = chunkContent;
                let chunkBr = document.createElement("BR");

                dataDiv.appendChild(chunkDiv);
                dataDiv.appendChild(chunkBr);
            }
        }
    };

    getPrettyDate = (date) => {
        let dateString = "";

        dateString = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

        return dateString;
    };

};


// be sure to inject anything in the config file and pass it as an argument
application(service);

