  function aktualizovatDatum() {
  var d = new Date();
  var datum = d.getDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear();
  var cas = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
  document.getElementById('aktualniDatum').textContent = datum + ' ' + cas;
  document.getElementById('milisekundy').textContent = d.getTime(); // Zobrazit aktuální milisekundy
}

  function prevadet() {
  var milisekundy = parseInt(document.getElementById('milisekundyInput').value);
  var datum = new Date(milisekundy);
  var formatovanyDatum = datum.getDate() + '.' + (datum.getMonth()+1) + '.' + datum.getFullYear();
  document.getElementById('milisekundy').textContent = milisekundy;
  document.getElementById('output').textContent = milisekundy + " milisekund je " + formatovanyDatum;
}
  function zkopirovatDatum() {
  var milisekundyText = document.getElementById('aktualniDatum').textContent;
  navigator.clipboard.writeText(milisekundyText)
}
  function zkopirovatMilisekundy() {
  var milisekundyText = document.getElementById('milisekundy').textContent;
  navigator.clipboard.writeText(milisekundyText)
}

  aktualizovatDatum();
  setInterval(aktualizovatDatum, 1000); // Aktualizovat datum každou sekundu

