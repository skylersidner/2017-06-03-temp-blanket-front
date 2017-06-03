
app = (service) => {

    service.weatherDate.getLastYear().then((response) => {
        console.log(response);

    });
};


// be sure to inject anything in the config file and pass it as an argument
app(service);

