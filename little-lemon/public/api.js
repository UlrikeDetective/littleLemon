const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];

    // Add all time slots between 17:00 (5 PM) and 23:00 (11 PM)
    for(let i = 17; i <= 23; i++) {
        result.push(i + ':00');
        result.push(i + ':30');
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;