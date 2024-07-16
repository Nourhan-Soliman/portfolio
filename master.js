
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('#navbar .nav-link');
    var currentPage = window.location.pathname.split("/").pop();

    links.forEach(function (link) {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active-link');
        }
        link.addEventListener('click', function () {
            links.forEach(function (link) {
                link.classList.remove('active-link');
            });
            // this.classList.add('active-link');
        });
    });
});