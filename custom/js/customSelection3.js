selected = [];

function select(id) {
    if (selected.includes(id)) {
        const index = selected.indexOf(id);
        if (index > -1) {
            selected.splice(index, 1);
        }
        objs = document.querySelectorAll("[data-coil='b" + id +"']");
        objs.forEach(function(x) {
            x.style.background = "#EFEFEF";
        });
        return;
    }
    if (selected.length >= 7) {
        return;
    }
    selected.push(id);
    objs = document.querySelectorAll("[data-coil='b" + id +"']");
    objs.forEach(function(x) {
        x.style.background = "#00FF00";
    });
}

function proceed() {
    if (selected.length !== 7) {
        return false;
    }
    $.ajax({
        type: "POST",
        url: 'storeSelection.php',
        data: {selected: selected, table: "final"},

        success: function (obj, textstatus) {
            window.console.log(obj);
            window.console.log("red");
            window.location.href = "questionnaire.php";
            return false;

        }
    });

}
