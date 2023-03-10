window.onload = function() {
    const navItems = document.querySelectorAll('.nav-link');
    console.log(navItems);

    function activeLink() {
        navItems.forEach((item) => {
            item.classList.remove('active');
            this.classList.add('active');
        });
    }

    navItems.forEach(item => item.addEventListener('click', activeLink));
}


