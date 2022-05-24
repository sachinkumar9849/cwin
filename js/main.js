// side menu
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openNav_two() {
    document.getElementById("mySidenav").style.width = "350px ";
    document.getElementById("main ").style.marginRight = "350px ";
}

function closeNav_two() {
    document.getElementById("mySidenav").style.width = "0 ";
    document.getElementById("main ").style.marginRight = "0 ";
}






$(document).ready(function() {
    $('.show_menu').hide();
    $(".click_menu").click(function() {

        $(".show_menu").toggle(1000);
    });
    $('.click_sub_one_show').hide();
    $(".click_sub_one").click(function() {
        $(".click_sub_one_show").toggle(1000);
    });



    $('.show_menu_two').hide();
    $('.click_menu_two').click(function() {

        $(".show_menu_two").toggle(1000);
    });
    $('.click_sub_one_show_three').hide();
    $(".click_sub_three").click(function() {
        $(".click_sub_one_show_three").toggle(1000);
    });




    $('.show_menu_four').hide();
    $(".click_menu_four").click(function() {

        $(".show_menu_four").toggle(1000);
    });


    $('.show_menu_five').hide();
    $(".click_menu_five").click(function() {

        $(".show_menu_five").toggle(1000);
    });
});



// sode menu js end
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// top button end 
function onYouTubePlayerAPIReady() {

    player = new YT.Player('yt-iframe');
}


function openbox() {

    $('.lightbox-backdrop, .box').css('display', 'inline-block');
    $('.lightbox-backdrop, .box').animate({ 'opacity': '1' }, 300, 'linear');

    player.playVideo();
}


function closebox() {

    $('.lightbox-backdrop, .box').animate({ 'opacity': '0' }, 300, 'linear', function() {
        $('.lightbox-backdrop, .box').css('display', 'none');

        player.pauseVideo();
    });
}
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);
// tab 
$(document).ready(function() {

        $('ul.tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })

    })
    // tab 
$(function() {
    new WOW().init();
});
$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
        $(this).text("Read less")
    } else {
        $(this).text("Read more")
    }
});


let modalId = $('#image-gallery');

$(document)
    .ready(function() {

        loadGallery(true, 'a.thumbnail');

        //This function disables buttons when needed
        function disableButtons(counter_max, counter_current) {
            $('#show-previous-image, #show-next-image')
                .show();
            if (counter_max === counter_current) {
                $('#show-next-image')
                    .hide();
            } else if (counter_current === 1) {
                $('#show-previous-image')
                    .hide();
            }
        }

        /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */

        function loadGallery(setIDs, setClickAttr) {
            let current_image,
                selector,
                counter = 0;

            $('#show-next-image, #show-previous-image')
                .click(function() {
                    if ($(this)
                        .attr('id') === 'show-previous-image') {
                        current_image--;
                    } else {
                        current_image++;
                    }

                    selector = $('[data-image-id="' + current_image + '"]');
                    updateGallery(selector);
                });

            function updateGallery(selector) {
                let $sel = selector;
                current_image = $sel.data('image-id');
                $('#image-gallery-title')
                    .text($sel.data('title'));
                $('#image-gallery-image')
                    .attr('src', $sel.data('image'));
                disableButtons(counter, $sel.data('image-id'));
            }

            if (setIDs == true) {
                $('[data-image-id]')
                    .each(function() {
                        counter++;
                        $(this)
                            .attr('data-image-id', counter);
                    });
            }
            $(setClickAttr)
                .on('click', function() {
                    updateGallery($(this));
                });
        }
    });

// build key actions
$(document)
    .keydown(function(e) {
        switch (e.which) {
            case 37: // left
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
                    $('#show-previous-image')
                        .click();
                }
                break;

            case 39: // right
                if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
                    $('#show-next-image')
                        .click();
                }
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

// image end

var $slide = $(".slide")
    .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true
    })
    .on({
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
            $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
        },
        afterChange: function() {
            $(".preve-slide", this).removeClass("preve-slide　slide-animation");
        }
    });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");




// MENU START
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


// NAVE SCROOL


$(document).ready(function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        header.classList.toggle("sticky-bar", window.scrollY > 50);
    });

});


$(".our_program_slider").slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,

});



// NOTICE POPUP START 

$(document).ready(function() {
    $('#myModal').modal('show');
});
// NOTICE POPUP END
$('.imgholder').on('click', function(event) {
    var elem = $(this);
    var pX = event.pageX;
    var pY = event.pageY;
    var iW = elem.width();
    var iH = elem.height();
    var iX = elem.offset().left;
    var iY = elem.offset().top;
    var xper = (((pX - iX) / iW) * 100).toFixed(2);
    var yper = (((pY - iY) / iH) * 100).toFixed(2);

    $("span").text(xper + "%, " + yper + "%");
    console.log("I'm " + elem.width() + " x " + elem.height());
})

// map toll tip 
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})



//ABOUT READ MORE START


class readMore {
    constructor() {
        this.content = '.readmore__content';
        this.buttonToggle = '.readmore__toggle';
    }

    bootstrap() {
        this.setNodes();
        this.init();
        this.addEventListeners();
    }

    setNodes() {
        this.nodes = {
            contentToggle: document.querySelector(this.content)
        };

        this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
    }

    init() {
        const { contentToggle } = this.nodes;

        this.stateContent = contentToggle.innerHTML;

        contentToggle.innerHTML = `${this.stateContent.substring(0, 600)}...`;
    }

    addEventListeners() {
        this.buttonToggle.addEventListener('click', this.onClick.bind(this))
    }

    onClick(event) {
        const targetEvent = event.currentTarget;
        const { contentToggle } = this.nodes

        if (targetEvent.getAttribute('aria-checked') === 'true') {
            targetEvent.setAttribute('aria-checked', 'false')
            contentToggle.innerHTML = this.stateContent;
            this.buttonToggle.innerHTML = 'Show less'

        } else {
            targetEvent.setAttribute('aria-checked', 'true')
            contentToggle.innerHTML = `${this.stateContent.substring(0, 600)}...`
            this.buttonToggle.innerHTML = 'Read More'
        }
    }
}


const initReadMore = new readMore();
initReadMore.bootstrap()



//   contact
feather.replace();