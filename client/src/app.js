const apiRequest = new ApiRequest();

const app = function () {
    const ul = document.getElementById('country-list');

    const aPIRequestURL = "https://restcountries.eu/rest/v2/all";
    apiRequest.getData(aPIRequestURL);

    //work with updated data - list of countries is available here
    apiRequest.onUpdate = function (countries) {
        countries.forEach(country => {
            const li = document.createElement('li')
            li.innerText = country.name;
            ul.appendChild(li);
        })
    }

}



document.addEventListener('DOMContentLoaded', app);