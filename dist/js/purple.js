var app = {
	toggleSidebar: function(ele) {
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

	sparkline: function() {
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
	},

	flatpickr: function() {
		$(".basicFlatpickr").flatpickr();

		$(".dateTime").flatpickr({
			enableTime: true,
			dateFormat: "Y-m-d H:i",
		});

		$(".readable").flatpickr({
			altInput: true,
			altFormat: "F j, Y",
			dateFormat: "Y-m-d",
		});

		$(".minDate").flatpickr({
			minDate: "2020-01"
		});

		$(".maxDate").flatpickr({
			dateFormat: "d.m.Y",
			maxDate: "15.12.2017"
		});

		$('.minToday').flatpickr({
			minDate: "today"
		});

		$(".disableDate").flatpickr({
			disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date()],
			dateFormat: "Y-m-d",
		});

		$('.disableRange').flatpickr({
			dateFormat: "Y-m-d",
			disable: [{
					from: "2019-05-01",
					to: "2019-05-08"
				},
				{
					from: "2025-09-01",
					to: "2025-12-01"
				}
			]
		});

		$(".pickfun").flatpickr({
			"disable": [
				function(date) {
					// return true to disable
					return (date.getDay() === 6 || date.getDay() === 0);

				}
			],
			"locale": {
				"firstDayOfWeek": 1 // start week on Monday
			}
		});
	},
	responsive: function() {
		var width = $(document).width();
		if (width <= 767) {
			$('#topbar').addClass('hideSidebar');
			$('#main-content').addClass('hideSidebar');
			$('.sidebar').addClass('slideOutLeft').removeClass('slideInLeft');
		} else {
			$('#topbar').removeClass('hideSidebar');
			$('#main-content').removeClass('hideSidebar');
			$('.sidebar').removeClass('slideOutLeft').addClass('slideInLeft');
		}
	}
};


// sidebar  dropdown menu
$('.sidebar-menu li a').on('click', function(e) {
	var vm = $(this);
	if (vm.siblings('.submenu').length > 0) {
		if (vm.parent('.selected').length > 0) {
			vm.parent('li').removeClass('selected');
			vm.removeClass('active');
		} else {
			vm.parent('li').next().removeClass('selected');
			vm.parent('li').addClass('selected');
			vm.addClass('active');
		}
	}
});

// call sparkline
app.sparkline();
app.responsive();

// window resize
$(document).ready(function() {
	$(window).resize(function() {
		app.responsive();
	});
});