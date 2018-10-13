function load() {
    var drawer = document.querySelector(".mdc-drawer");
    mdc.drawer.MDCDrawer.attachTo(drawer);
}

window.onload = load();