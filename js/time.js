function copyUnixTime() {
    var unixTimeInput = document.getElementById('unixTime2');

    // Select the text in the input element
    unixTimeInput.select();
    unixTimeInput.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected text
    document.execCommand('copy');

    // Deselect the input element
    unixTimeInput.setSelectionRange(0, 0);
}

    // Function to update the UNIX time every second
    setInterval(function() {
    document.getElementById('unixTime2').value = Math.floor(Date.now());
}, 1000);


    function convertToUTC() {
    var milisekundy = parseInt(document.getElementById('unixTime').value);
    var datum = new Date(milisekundy);

    var den = ("0" + datum.getDate()).slice(-2); // Přidáváme nulu dopředu pro jednociferná čísla
    var mesic = ("0" + (datum.getMonth() + 1)).slice(-2); // Přidáváme nulu dopředu pro jednociferná čísla
    var rok = datum.getFullYear();
    var hodina = ("0" + datum.getHours()).slice(-2);
    var minuta = ("0" + datum.getMinutes()).slice(-2);
    var sekunda = ("0" + datum.getSeconds()).slice(-2);

    var formatovanyDatum = den + '.' + mesic + '.' + rok + ' ' + hodina + ':' + minuta + ':' + sekunda;
    document.getElementById('convertedUTCTime').textContent = formatovanyDatum;
}
    function copyconvertToUTC() {
    var convertedUTCTime = document.getElementById('convertedUTCTime').textContent;

    // Vytvoření dočasného vstupního elementu typu text
    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    // Výběr textu v dočasném vstupním elementu
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    // Kopírování vybraného textu
    document.execCommand('copy');

    // Odstranění dočasného vstupního elementu
    document.body.removeChild(tempInput);
}

    function convertToLocalTime() {
    var localDateString = document.getElementById('localDate').value.trim();
    var localDateParts;

    // Použití regulárního výrazu pro rozdělení data podle jednotlivých částí
    var regex = /(\d{2}).(\d{2}).(\d{4})(?:\s?@?\s?(\d{2}):(\d{2}):(\d{2})\.?(\d{3})?)?/;
    var match = localDateString.match(regex);

    if (match) {
    var day = parseInt(match[1]);
    var month = parseInt(match[2]) - 1; // Měsíce jsou indexované od 0
    var year = parseInt(match[3]);
    var hours = match[4] ? parseInt(match[4]) : 0;
    var minutes = match[5] ? parseInt(match[5]) : 0;
    var seconds = match[6] ? parseInt(match[6]) : 0;
    var milliseconds = match[7] ? parseInt(match[7]) : 0;

    // Vytvoření nového objektu Date s použitím zadaného data
    var localDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);

    // Získání počtu milisekund z nově vytvořeného objektu Date
    var resultMilliseconds = localDate.getTime();

    document.getElementById('convertedLocalTime').textContent = "Converted time in milliseconds: " + resultMilliseconds;
} else {
    console.error("Neznámý formát data");
}
}

    function copyconvertToLocalTime() {
    var convertedUTCTime = document.getElementById('convertedLocalTime').textContent;

    // Vytvoření dočasného vstupního elementu typu text
    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    // Výběr textu v dočasném vstupním elementu
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    // Kopírování vybraného textu
    document.execCommand('copy');

    // Odstranění dočasného vstupního elementu
    document.body.removeChild(tempInput);
}


    function convertToUnixTime() {
    var dateTimeString = document.getElementById('customDateTime').value.trim();
    var parts = dateTimeString.split(' ');
    if (parts.length !== 2) {
    alert('Please enter a valid date and time in the format DD.MM.YYYY HH:MM:SS.');
    return;
}
    var dateParts = parts[0].split('.');
    var timeParts = parts[1].split(':');
    if (dateParts.length !== 3 || timeParts.length !== 3) {
    alert('Please enter a valid date and time in the format DD.MM.YYYY HH:MM:SS.');
    return;
}
    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]) - 1; // Months are zero-indexed
    var year = parseInt(dateParts[2]);
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var seconds = parseInt(timeParts[2]);

    // Create a Date object using the local time components
    var localDate = new Date(year, month, day, hours, minutes, seconds);

    // Convert local date to UNIX time in seconds
    var unixTimeInSeconds = Math.floor(localDate.getTime() / 1000);

    var formattedDateTime1 = getFormattedDateTime(unixTimeInSeconds);
    var formattedDateTime2 = getFormattedDateTime2(unixTimeInSeconds);

    document.getElementById('convertedUnixTime').innerText = formattedDateTime1;
    document.getElementById('getFormattedDateTime2').innerText = formattedDateTime2;
}
    function copyconvertToUnixTime() {
    var convertedUTCTime = document.getElementById('convertedUnixTime').textContent;

    // Vytvoření dočasného vstupního elementu typu text
    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    // Výběr textu v dočasném vstupním elementu
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    // Kopírování vybraného textu
    document.execCommand('copy');

    // Odstranění dočasného vstupního elementu
    document.body.removeChild(tempInput);
}
    function copyconvertToUnixTime2() {
    var convertedUTCTime = document.getElementById('getFormattedDateTime2').textContent;

    // Vytvoření dočasného vstupního elementu typu text
    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    // Výběr textu v dočasném vstupním elementu
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    // Kopírování vybraného textu
    document.execCommand('copy');

    // Odstranění dočasného vstupního elementu
    document.body.removeChild(tempInput);
}

    function getFormattedDateTime2(unixTimeInSeconds) {
    var date = new Date(unixTimeInSeconds * 1000);

    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed, so we add 1
    var year = date.getFullYear();

    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);
    var milliseconds = ('00' + date.getMilliseconds()).slice(-3);

    return day + '.' + month + '.' + year + ' @ ' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}

    function getFormattedDateTime(unixTimeInSeconds) {
    var date = new Date(unixTimeInSeconds * 1000);

    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = monthNames[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);
    var milliseconds = ('00' + date.getMilliseconds()).slice(-3);

    return month + ' ' + day + ', ' + year + ' @ ' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}



    function convertToStrings() {
    var inputText = document.getElementById('inputText').value.trim();
    var strings = inputText.split('\n').map(function(str) {
    return "'" + str.trim() + "'";
});
    document.getElementById('outputText').value = strings.join(',');
}
    function copyconvertToStrings() {
    var convertedUTCTime = document.getElementById('outputText').textContent;

    // Vytvoření dočasného vstupního elementu typu text
    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    // Výběr textu v dočasném vstupním elementu
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    // Kopírování vybraného textu
    document.execCommand('copy');

    // Odstranění dočasného vstupního elementu
    document.body.removeChild(tempInput);
}