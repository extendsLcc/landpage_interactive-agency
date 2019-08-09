(() => {

    // ! Ref: https://www.codeply.com/go/zjZsn1ly29

    $('#works-carousel').carousel({
        interval: 10000000
    })

    $('.carousel .carousel-item').each(function () {

        var minPerSlide = 3;
        var next = $(this).next();

        if (!next.length) {

            next = $(this).siblings(':first');

        }

        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {

            next = next.next();

            if (!next.length) {

                next = $(this).siblings(':first');

            }

            next.children(':first-child').clone().appendTo($(this));

        }

    });


})();