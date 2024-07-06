const CITY = document.querySelector('#input_city')
const BUTTON = document.querySelector('button')
const RESULT = document.querySelector('#result')

BUTTON.addEventListener('click', GetWeather)

async function GetWeather(){

    const API_KEY = 'e82252527048047f45c32776acc06ba9'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&units=metric&appid=${API_KEY}`

    try{
        const response = await fetch(API_URL)
        if (!response.ok){
            throw new Error('Cidade Não Encontrada')
        }
        else {
            const dados = await response.json()
            console.log(dados)
            const temp = dados.main.temp
            console.log(temp)
            RESULT.textContent = `${temp}°c`
        }
    }
    catch(error){
        console.log('deu ruim')
        console.log(error)
    }


}