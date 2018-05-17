//jshint esversion:6
// capture audio - done
// get amplitutde
// animate something to that amplitude
// animate only in voice range hz?

app = {
	button: document.querySelector("button"),
	vol: document.querySelector(".vol"),

	init: () => {
		app.bindEvents();
	},

	bindEvents: () => {
		app.button.addEventListener("click", app.startRecord);

		app.button.addEventListener("tap", app.startRecord);
	},

	startRecord: () => {
		console.log("start to record");
		if (app.button.textContent === "Stop") {
			app.button.textContent = "Record";

			window.cancelAnimationFrame(app.animation);

			if (app.context) {
				app.context.close();
			}
		} else {
			navigator.mediaDevices
				.getUserMedia({ audio: true, video: false })
				.then(app.handleSuccess);
		}
	},

	handleSuccess: stream => {
		// Chrome / Safari have different implementations 
		if (window.AudioContext) {
			console.log("chrome");
			app.context = new AudioContext();
		} else if (window.webkitAudioContext) {
			console.log("safari");
			app.context = new webkitAudioContext();
		}

		app.button.textContent = "Stop";

		var options = {
			onUpdate: function(val) {
				// captured voice activity
				console.log('curr val:', val);
				app.val = val * 100;
			}
		};

		// anaylze voice 
		vad(app.context, stream, options);

		// animate based on this
		app.animate();
	},

	animate: () => {
		app.animation = window.requestAnimationFrame(app.animate);
		app.vol.style.height = app.val + "px";
	}
};

window.onload = app.init();
