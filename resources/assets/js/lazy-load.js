document.addEventListener("DOMContentLoaded", function () {
    var lazyBackgrounds = document.querySelectorAll(".lazy-background");

    lazyBackgrounds.forEach(function (element) {
        var imageUrl = element.getAttribute("data-bg");

        if (imageUrl) {
            var observer = new IntersectionObserver(function (
                entries,
                observer
            ) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        element.style.backgroundImage = `url(${imageUrl})`;
                        observer.unobserve(element);
                    }
                });
            });

            observer.observe(element);
        }
    });
});
