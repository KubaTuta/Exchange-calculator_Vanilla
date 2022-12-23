{
    const checkRate = (exchange) => { 

        switch (exchange) {
            case ("PLN/EUR"):
                return 1 / 4.67;
            case ("PLN/GBP"):
                return 0.19;
            case ("PLN/HRK"):
                return 1.61;
            case ("EUR/PLN"):
                return 4.67;
            case ("EUR/GBP"):
                return 0.87;
            case ("EUR/HRK"):
                return 7.55;
            case ("GBP/PLN"):
                return 1 / 0.19;
            case ("GBP/EUR"):
                return 1 / 0.87;
            case ("GBP/HRK"):
                return 8.63;
            case ("HRK/PLN"):
                return 1 / 1.61;
            case ("HRK/EUR"):
                return 1 / 7.55;
            case ("HRK/GBP"):
                return 1 / 8.63;
            default:
                return 1;
        };
    };

    const currencyToElement = document.querySelector(".js-currencyTo");

    const toggleUnit = () => { 

        const eurElement = document.querySelector(".js-eur");
        const gbpElement = document.querySelector(".js-gbp");
        const plnElement = document.querySelector(".js-pln");
        const answerElement = document.querySelector(".js-answer");

        switch (currencyToElement.value) {
            case eurElement.value:
                answerElement.innerText = "EUR";
                break;

            case gbpElement.value:
                answerElement.innerText = "GBP";
                break;

            case plnElement.value:
                answerElement.innerText = "PLN";
                break;

            default:
                answerElement.innerText = "HRK";
        }
    };
    const showAnswer = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyFromElement = document.querySelector(".js-currencyFrom");

        const amount = +amountElement.value;
        let result = amount * checkRate(`${currencyFromElement.value}/${currencyToElement.value}`);

        showAnswer(result);
        toggleUnit();
    };
    
   const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
   };

   init();
}
