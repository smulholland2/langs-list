var select = document.createElement("SELECT");
document.body.appendChild(select);

loadLangs();
function loadLangs(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var langs = JSON.parse(this.responseText);
        Object.keys(langs).forEach(key => {
            var option = document.createElement("option");
            option.text = key;
            option.value = langs[key];
            select.add(option);
        });
    }};
    xmlhttp.open("GET", "langs.json", true);
    xmlhttp.send();
}

//* Use this to change the language of a SpeechRecognition object. *//
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

select.addEventListener("change", changeLang);
function changeLang(){
    recognition.lang = select.options[select.selectedIndex].value;
}