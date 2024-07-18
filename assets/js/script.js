const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});




const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const anotherHiddenElements = document.querySelectorAll('.another-hidden');
anotherHiddenElements.forEach((el) => observer.observe(el));


lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling : true,
    alwaysShowNavOnTouchDevices : true,
});
