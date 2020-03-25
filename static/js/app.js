const cursorRectangle = document.querySelectorAll(".cursor-rectangle");

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    
    /**
     * Animates the terminal-like cursor in the
     * About summary section in index.html
     */
    function animateCursor() {
        setInterval(function() {
            cursorRectangle.forEach(cursor => {
                cursor.classList.toggle('cursor-hide');
            });
            
        }, 800);
    }

    animateCursor();
    
});