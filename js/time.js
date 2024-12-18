document.addEventListener("DOMContentLoaded", function() {
    function populateSelectors() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const currentSecond = currentDate.getSeconds();

        const yearSelect = document.getElementById("year");
        const monthSelect = document.getElementById("month");
        const daySelect = document.getElementById("day");
        const hourSelect = document.getElementById("hour");
        const minuteSelect = document.getElementById("minute");
        const secondSelect = document.getElementById("second");

        for (let i = currentYear - 50; i <= currentYear + 50; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }

        for (let i = 1; i <= 12; i++) {
            const option = document.createElement("option");
            option.value = i - 1; // měsíc je v JavaScriptu 0-indexovaný
            option.textContent = i;
            monthSelect.appendChild(option);
        }

        for (let i = 0; i < 24; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = ("0" + i).slice(-2);
            hourSelect.appendChild(option);
        }

        for (let i = 0; i < 60; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = ("0" + i).slice(-2);
            minuteSelect.appendChild(option);
            secondSelect.appendChild(option.cloneNode(true)); // Sekundy kopírujeme
        }

        yearSelect.value = currentYear;
        monthSelect.value = currentMonth;
        updateDays(currentYear, currentMonth);
        daySelect.value = currentDay;
        hourSelect.value = 0;
        minuteSelect.value = 0;
        secondSelect.value = 0;
    }

    function updateDays(year, month) {
        const daySelect = document.getElementById("day");

        const daysInMonth = new Date(year, month, 0).getDate();

        daySelect.innerHTML = "";

        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    window.generateMilliseconds = function() {
        const year = parseInt(document.getElementById("year").value);
        const month = parseInt(document.getElementById("month").value);
        const day = parseInt(document.getElementById("day").value);
        const hour = parseInt(document.getElementById("hour").value);
        const minute = parseInt(document.getElementById("minute").value);
        const second = parseInt(document.getElementById("second").value);

        const selectedDate = new Date(year, month, day, hour, minute, second);
        const milliseconds = selectedDate.getTime();

        document.getElementById("generatedMilliseconds").textContent = `Milliseconds: ${milliseconds}`;
    }

    window.copyGeneratedMilliseconds = function() {
        const milliseconds = document.getElementById("generatedMilliseconds").textContent.split(": ")[1];
        navigator.clipboard.writeText(milliseconds).then(() => {
            console.log("Milliseconds copied to clipboard");
        });
    }

    populateSelectors();

    document.getElementById("year").addEventListener("change", () => {
        const year = parseInt(document.getElementById("year").value);
        const month = parseInt(document.getElementById("month").value);
        updateDays(year, month);
    });

    document.getElementById("month").addEventListener("change", () => {
        const year = parseInt(document.getElementById("year").value);
        const month = parseInt(document.getElementById("month").value);
        updateDays(year, month);
    });
});

function convertToUTC() {
    var milisekundy = parseInt(document.getElementById('unixTime').value);
    var datum = new Date(milisekundy);

    var den = ("0" + datum.getDate()).slice(-2);
    var mesic = ("0" + (datum.getMonth() + 1)).slice(-2);
    var rok = datum.getFullYear();
    var hodina = ("0" + datum.getHours()).slice(-2);
    var minuta = ("0" + datum.getMinutes()).slice(-2);
    var sekunda = ("0" + datum.getSeconds()).slice(-2);

    var formatovanyDatum = den + '.' + mesic + '.' + rok + ' ' + hodina + ':' + minuta + ':' + sekunda;
    document.getElementById('convertedUTCTime').textContent = formatovanyDatum;
}

function copyUnixTime() {
    var unixTimeInput = document.getElementById('unixTime2');

    unixTimeInput.select();
    unixTimeInput.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand('copy');

    unixTimeInput.setSelectionRange(0, 0);
}

window.onload = function() {
    setInterval(function() {
        const unixInput = document.getElementById('unixTime2');
        if (unixInput) {
            unixInput.value = Math.floor(Date.now());
        } else {
            console.error("Element with ID 'unixTime2' not found.");
        }
    }, 1000);
};



    function copyconvertToUTC() {
    var convertedUTCTime = document.getElementById('convertedUTCTime').textContent;

    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    document.execCommand('copy');

    document.body.removeChild(tempInput);
}

    function convertToLocalTime() {
    var localDateString = document.getElementById('localDate').value.trim();
    var localDateParts;

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

    var localDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);

    var resultMilliseconds = localDate.getTime();

    document.getElementById('convertedLocalTime').textContent = resultMilliseconds;
} else {
    console.error("Neznámý formát data");
}
}

    function copyconvertToLocalTime() {
    var convertedUTCTime = document.getElementById('convertedLocalTime').textContent;

    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    document.execCommand('copy');

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
    var month = parseInt(dateParts[1]) - 1; // měsíce začínají od 0
    var year = parseInt(dateParts[2]);
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var seconds = parseInt(timeParts[2]);

    var localDate = new Date(year, month, day, hours, minutes, seconds);

    var unixTimeInSeconds = Math.floor(localDate.getTime() / 1000);

    var formattedDateTime1 = getFormattedDateTime(unixTimeInSeconds);
    var formattedDateTime2 = getFormattedDateTime2(unixTimeInSeconds);

    document.getElementById('convertedUnixTime').innerText = formattedDateTime1;
    document.getElementById('getFormattedDateTime2').innerText = formattedDateTime2;
}
    function copyconvertToUnixTime() {
    var convertedUTCTime = document.getElementById('convertedUnixTime').textContent;

    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    document.execCommand('copy');

    document.body.removeChild(tempInput);
}
    function copyconvertToUnixTime2() {
    var convertedUTCTime = document.getElementById('getFormattedDateTime2').textContent;

    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    document.execCommand('copy');

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

    var tempInput = document.createElement("input");
    tempInput.value = convertedUTCTime;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Pro mobilní zařízení */

    document.execCommand('copy');

    document.body.removeChild(tempInput);
}