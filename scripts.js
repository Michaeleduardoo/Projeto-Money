const button = document.querySelector(".button-converter")
const currencySelect = document.querySelector(".currency-select")
const currencyMoedas = document.querySelector(".currency-moedas")

function convertValues() {
    const input = document.querySelector(".input-currency").value
    const currencyToValue = document.querySelector(".currency-to-value")
    const currencyValue = document.querySelector(".currency-value")


    const dolar = 4.91
    const euro = 5.38
    const libra = 6.23
    const bitcoin = 4.27
    const argentino = 0.68
    const iene = 5.60
    const turca = 0.18

    currencyToValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

    if (currencySelect.value === "dolar") {

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolar.toFixed(2))
    }

    if (currencySelect.value === "euro") {

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / euro.toFixed(2))
    }

    if (currencySelect.value === "libra") {

        currencyValue.innerHTML = new Intl.NumberFormat("em-RE", {
            style: "currency",
            currency: "GBP"
        }).format(input / libra.toFixed(2))
    }

    if (currencySelect.value === "bitcoin") {

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(input / bitcoin.toFixed(2))
    }

    if (currencyMoedas.value === "argentino") {

        currencyToValue.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(input / argentino.toFixed(2))

    }

    if (currencyMoedas.value === "iene") {

        currencyToValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(input / iene.toFixed(2))

    }

    if (currencyMoedas.value === "lira") {

        currencyToValue.innerHTML = new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY"
        }).format(input / turca.toFixed(2))

    }


}

function changeCurrency() {
    const currencyNames = document.querySelector("#currency-names")
    const imgFlag = document.getElementById("img-flag")

    if (currencySelect.value === "dolar") {
        currencyNames.innerHTML = "Dólar Americano"
        imgFlag.src = "./assets/dolar.png"
    }

    if (currencySelect.value === "euro") {
        currencyNames.innerHTML = "Euro"
        imgFlag.src = "./assets/libra.png"
    }

    if (currencySelect.value === "euro") {
        currencyNames.innerHTML = "Euro"
        imgFlag.src = "./assets/euro.png"
    }

    if (currencySelect.value === "libra") {
        currencyNames.innerHTML = "Libra"
        imgFlag.src = "./assets/libra.png"
    }

    if (currencySelect.value === "bitcoin") {
        currencyNames.innerHTML = "Bitcoin"
        imgFlag.src = "./assets/bitcoin.png"
    }



    convertValues()
}


function changeMoeda() {
    const input = document.querySelector(".input-currency")
    const imageFlag = document.getElementById("flag-img")
    const currencyNames = document.querySelector("#names-currency")

    if (currencyMoedas.value === "real") {
        currencyNames.innerHTML = "Real"
        imageFlag.src = "./assets/brasil.png"
        input.placeholder = "10.000,00"
    }

    if (currencyMoedas.value === "argentino") {
        currencyNames.innerHTML = "Peso argentino"
        imageFlag.src = "./assets/argentino.png"
        input.placeholder = "$8,6.32"
    }

    if (currencyMoedas.value === "iene") {
        currencyNames.innerHTML = "Franco Suíço"
        imageFlag.src = "./assets/iene.png"
        input.placeholder = "1,619,266"
    }

    if (currencyMoedas.value === "lira") {
        currencyNames.innerHTML = "Lira Turca"
        imageFlag.src = "./assets/turca.png"
        input.placeholder = "0,1809"
    }


    convertValues()

}



currencySelect.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)
currencyMoedas.addEventListener("change", changeMoeda)