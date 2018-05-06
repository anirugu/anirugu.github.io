
$(function () {
    loadLanguage();
    setupEvents();
});

window.onbeforeunload = function (event) {
    var text = $("#editor").val();
    localStorage.setItem("currentText", text);
};


function setupEvents() {
    var text = localStorage["currentText"];
    var from = localStorage["from"];
    var to = localStorage["to"];
    if (text) {
        $("#editor").val(text);
    }
    if (from) {
        $("#from").val(from);
    }
    if (to) {
        $("#to").val(to);
    }
    $("#btTranslate").click(function () {
        var text = $("#editor").val();
        var from = $("#from").val();
        var to = $("#to").val();

        var url = "https://cxl-services.appspot.com/proxy?url=https%3A%2F%2Ftranslation.googleapis.com%2Flanguage%2Ftranslate%2Fv2%2F%3Fq%3D" + encodeURI(text)+"%26source%3D" + from + "%26target%3D" + to;
        $.get(url, function (res) {
            var result = res.data.translations[0].translatedText;
            $(".result-wrapper").html(result);
        });

    })
    $("#from").change(function () {
        var val = $(this).val();
        localStorage.setItem("from", val);
    });
    $("#to").change(function () {
        var val = $(this).val();
        localStorage.setItem("to", val);
    });
}

function loadLanguage() {
    var res = [];
    $("paper-item").each(function (x, y) {
        code = $(y).attr('code');
        text = $(y).text().trim();
        var opt = $("<option/>", { text: text, value: code })
        $("#from").append($(opt).clone());
        $("#to").append($(opt).clone());
    });
}


function encodingString(rawStr) {
    return encodeURI(rawStr);
}