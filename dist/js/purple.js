var app = {
  toggleSidebar: function (ele) {
    if (ele) {
      if ($('.sidebar').hasClass('slideOutLeft')) {
        $('.sidebar').removeClass('slideOutLeft').addClass('slideInLeft');
      } else {
        $('.sidebar').addClass('slideOutLeft').removeClass('slideInLeft');
      }
      $('#topbar').toggleClass('hideSidebar');
      $('#main-content').toggleClass('hideSidebar');
    }
  },

  sparkline: function () {
    $('.sparkline-primary').sparkline('html', {
      width: '100%',
      fillColor: '#6b4ece',
      lineColor: '#6b4ece',
      lineWidth: 1.3,
      spotColor: false,
      disableTooltips: true,
      disableInteraction: true,
      enableTagOptions: true,
      height: 50
    });

    $('.sparkline-success').sparkline('html', {
      lineColor: '#11bf77',
      width: '100%',
      fillColor: '#11bf77',
      lineWidth: 1.3,
      spotColor: false,
      disableTooltips: true,
      disableInteraction: true,
      enableTagOptions: true,
      height: 50
    });

    $('.sparkline-info').sparkline('html', {
      lineColor: '#58c2d6',
      width: '100%',
      fillColor: '#58c2d6',
      lineWidth: 1.3,
      spotColor: false,
      disableTooltips: true,
      disableInteraction: true,
      enableTagOptions: true,
      height: 50
    });
  }
};

// call sparkline
app.sparkline();
