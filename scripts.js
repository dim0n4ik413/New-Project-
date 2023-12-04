document.addEventListener('DOMContentLoaded', function() {
    var playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = '/' + button.parentElement.querySelector('h2').textContent.toLowerCase().replace(/ /g, '-');
        });
    });
});