document.getElementById('input-currency').addEventListener('change', function() {
    // Obtém o valor da moeda selecionada
    const selectedCurrency = this.value;

    // Atualiza o texto ao lado do campo de entrada para a moeda selecionada
    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'BRL': 'R$',
        'GBP': '£',
        'JPY': '¥'
    };

    // Verifica se a moeda selecionada existe no objeto de símbolos
    const symbol = currencySymbols[selectedCurrency] || selectedCurrency;

    // Atualiza o conteúdo do span
    document.getElementById('currency-symbol').textContent = symbol;
});