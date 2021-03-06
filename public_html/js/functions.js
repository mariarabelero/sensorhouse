//Cambia el idioma
window.lang = new jquery_lang_js();
$().ready(function() {
    window.lang.run();
});


$(function() {
    
    //Botoncito del menu
    $(document).on('focusin', '.field, textarea', function() {
        if (this.title == this.value) {
            this.value = '';
        }
    }).on('focusout', '.field, textarea', function() {
        if (this.value == '') {
            this.value = this.title;
        }
    });

    // Slider
    var Page = (function() {
        var $navArrows = $('#nav-arrows').hide(),
                $shadow = $('#shadow').hide(),
                slicebox = $('#sb-slider').slicebox({
            onReady: function() {
                $navArrows.show();
                $shadow.show();
            },
            orientation: 'r',
            cuboidsRandom: true,
            disperseFactor: 30
        }),
        init = function() {
            initEvents();
        },
                initEvents = function() {
            $navArrows.children(':first').on('click', function() {
                slicebox.next();
                return false;
            });
            $navArrows.children(':last').on('click', function() {
                slicebox.previous();
                return false;
            });
        };
        return {init: init};
    })();
    
    // side bar
    var $window = $(window)
    setTimeout(function() {
        $('.bs-docs-sidenav').affix({
            offset: {
                top: function() {
                    return $window.width() <= 980 ? 290 : 210
                }
                , bottom: 270
            }
        })
    }, 100)


    //nose      
    Page.init();
    // make code pretty
    //window.prettyPrint && prettyPrint()

});