const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "ethical hacking",
				weight: 10.3
			}, {
				text: "Web Development",
				weight: 12.3
			},{
				text: "Software Engineering",
				weight: 10
			}, {
				text: "Game Development",
				weight: 11.5
			}, {
				text: "Project Management",
				weight: 12
			}, {
				text: "Codes & Project",
				weight: 13
			}, {
				text: "Architectural Designs",
				weight: 9.4
			}, {
				text: "Embedded Systems",
				weight: 10
			}, {
				text: "Autonomous Vehicle",
				weight: 10.3
			}, {
				text: "Database Management",
				weight: 10
			}, {
				text: "Data Science",
				weight: 9.9
			}, {
				text: "Cloud Computing",
				weight: 9.9
			}, {
				text: "Machine Learning",
				weight: 9.9
			}, {
				text: "Engineering",
				weight: 10.3
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love coding.", "teach programming and practical electronics engineering to people.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "rgb(79 185 15)", "font-weight": "450", "background-color": "#fff"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
