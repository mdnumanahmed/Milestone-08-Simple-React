const loadCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    displayCountries(data)
}

const displayCountries = (countries) => {
    const countriesHTML = countries.map(country => getCountryHTML(country))
    const countriesContainer = document.getElementById('countries')
    // set innerHTML and used join() to remove comma of array element
    countriesContainer.innerHTML = countriesHTML.join(' ')
}

const getCountryHTML = (country) => {
    console.log(country.flags.png);
    return `
        <div class="country">
            <h3>${country.name.common}</h3>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCountries()