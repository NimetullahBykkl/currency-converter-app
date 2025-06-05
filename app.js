const apiUrl = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_rOg8WvikhYhGNID0hFpr0wtLm2rtrMZVzwOhWr75&base_currency=';
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const result = document.getElementById('result');

// En popüler 20 para birimi
const currencies = ['USD', 'EUR', 'TRY', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'MXN', 'SGD', 'HKD', 'NOK', 'KRW', 'INR', 'RUB', 'BRL', 'ZAR'];

// Select'leri doldur
currencies.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.textContent = currency;
    fromCurrency.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = currency;
    option2.textContent = currency;
    toCurrency.appendChild(option2);
});

// Otomatik çeviri işlemi
function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    fetch(apiUrl + from)
        .then(response => response.json())
        .then(data => {
            const rate = data.data[to];
            const convertedAmount = (amount * rate).toFixed(2);
            result.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
        })
        .catch(error => {
            result.textContent = 'Hata: Döviz kurları alınamadı.';
        });
}

// Event listener'lar ekliyoruz
amountInput.addEventListener('input', convertCurrency);
fromCurrency.addEventListener('change', convertCurrency);
toCurrency.addEventListener('change', convertCurrency);