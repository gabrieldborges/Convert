const amount = document.getElementById("amount");
const form = document.querySelector("form");
const footer = document.querySelector("footer");
const result = document.getElementById("result");
const currency = document.getElementById("currency");
const description = document.getElementById("description");



let valor = 0
let valorFinal = 0

let coin = ""
const usd = 5.63
const eur = 6.35
const gbp = 7.55

amount.addEventListener("input", function (x) {
    amount.value = amount.value.replace(/[^0-9.]/g, '')   // remove non-numeric and non-dot
        .replace(/^(\d*\.\d{0,2}).*$/, '$1')  // keep up to two decimals
        .replace(/(\..*)\./g, '$1')
    valor = Number(amount.value);
    console.log(amount.value);

});

currency.addEventListener("change" , (a) => {
    console.log(currency.value)
})



form.addEventListener("submit", function (x) {
    x.preventDefault();
    console.log(`O valor é ${valor}`)
    console.log(usd, eur, gbp)
    switch (currency.value.toUpperCase()) {
        case "USD":
            valorFinal = valor * usd;
            description.textContent =  `US$ 1 = R$ ${usd}`;
            coin = "US$";
            break;
        case "EUR":
            valorFinal = valor * eur;
            description.textContent =  `€ 1 = R$ ${eur}`
            coin = "€";
            break;
        case "GBP":
            valorFinal = valor * gbp;
            description.textContent =  `￡ 1 = R$ ${gbp}`
            coin = "￡";
            break;
    }


    result.textContent = "R$" + " " +  String(valorFinal.toFixed(2));

    footer.classList.remove("hide-footer");
    console.log(`Valor final: ${valorFinal}`)

});



