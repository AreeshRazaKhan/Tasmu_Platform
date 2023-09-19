const $sideBar = document.querySelector('#sidebar-wrapper');
const $wrapper = document.querySelector('#wrapper');

$sideBar.addEventListener('mouseover', function (e) {
    e.preventDefault();
    $wrapper.classList.remove('toggled');
});

$sideBar.addEventListener('mouseout', function (e) {
    e.preventDefault();
    $wrapper.classList.add('toggled');
});