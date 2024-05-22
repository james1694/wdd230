document.addEventListener("DOMContentLoaded", function() {

    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    var lastModified = document.lastModified;
    document.getElementById("lastModifiedDate").textContent = lastModified;
});
