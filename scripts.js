document.addEventListener('DOMContentLoaded', function() {
    var bookBtn = document.getElementById('bookNowBtn');
    if (bookBtn) {
        bookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'book-repair.html';
        });
    }
});
