document.getElementById("tempConverterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = `${celsius}°C is ${fahrenheit}°F`;
});
