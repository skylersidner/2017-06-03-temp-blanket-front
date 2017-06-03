

weatherDate = () => {

    let DOMAIN = 'localhost:8080';

    this.getLastYear = () => {
        return promiseRequest('GET', 'http://' + DOMAIN + '/weatherDate/lastYear').then(
            (success) => {
                return success.target.response;
            },
            (fail) => {
                return fail.target.statusText;
            }
        );
    };

    this.promiseRequest = (method, url) => {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        });
    };

    return this;
};

service.weatherDate = weatherDate();
