(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });




 const galleryItems = document.querySelectorAll('.gallery-item');
  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const pagination = document.getElementById('pagination');
  let currentPage = 1;

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    galleryItems.forEach((item, index) => {
      item.style.display = (index >= start && index < end) ? 'block' : 'none';
    });
  }

  function setupPagination() {
    pagination.innerHTML = "";

    // Botón « (Primera página)
    const firstButton = document.createElement('li');
    firstButton.classList.add('page-item');
    firstButton.innerHTML = `<a class="page-link" href="#">&laquo;</a>`;
    firstButton.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = 1;
      showPage(currentPage);
      setupPagination();
    });
    pagination.appendChild(firstButton);

    // Botones numéricos
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.classList.add('page-item', (i === currentPage ? 'active' : ''));
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = i;
        showPage(currentPage);
        setupPagination();
      });
      pagination.appendChild(li);
    }

    // Botón » (Última página)
    const lastButton = document.createElement('li');
    lastButton.classList.add('page-item');
    lastButton.innerHTML = `<a class="page-link" href="#">&raquo;</a>`;
    lastButton.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = totalPages;
      showPage(currentPage);
      setupPagination();
    });
    pagination.appendChild(lastButton);
  }

  // Inicializar
  showPage(currentPage);
  setupPagination();


    
})(jQuery);

