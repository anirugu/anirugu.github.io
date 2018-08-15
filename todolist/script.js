window.onload = function () {
    pageLoad();
    loadTasks();
}

let txtField;

function pageLoad() {
    let f = document.getElementById("my-text-field");
    txtField = new mdc.textField.MDCTextField.attachTo(f);

    f.onkeypress = function (e) {
        if (e.key == "Enter") {

        }
    };
}

function loadTasks() {
    var tasks = localStorage.tasks;
    if (tasks != null) {
        tasks = JSON.parse(tasks);
    }
    else {
        tasks = [];
    }
    var wrap = document.getElementById("task-lists");
    tasks.forEach(function (x) {
        //wrap.appendChild()
        var li = document.createElement("li");
        li.className = "mdc-list-item";
        li.innerHTML = x;
        wrap.appendChild(li);
    });
}

function addItem(f) {
    var tasks = [];
    if (localStorage.tasks != null) {
        JSON.parse(localStorage.tasks);
    }
}