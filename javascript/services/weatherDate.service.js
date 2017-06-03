
var DOMAIN = 'localhost:8080';

weatherDateService = {

    getLastYear : () => {
        return promiseRequest('GET', 'http://' + DOMAIN + '/weatherDate/lastYear').then(
            (success) => {
                return success.target.response;
            },
            (fail) => {
                return fail.target.statusText;
            }
        );
    }
};

let promiseRequest = (method, url) => {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
};
