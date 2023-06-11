// // fill bars function

// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills');
// window.addEventListener('scroll', checkScroll);

// var animationDone = false;

// function initialiseBars() {
// 	for (let bar of progressBars) {
// 		bar.style.width = 0 + '%';
// 	}
// }

// initialiseBars();

// function fillBars() {
// 	for (let bar of progressBars) {
// 		let targetWidth = bar.getAttribute('data-bar-width');
// 		let currrentWidth = 0;
// 		let interval = setInterval(() => {
// 			if (currrentWidth > targetWidth) {
// 				clearInterval(interval);
// 				return;
// 			}

// 			currrentWidth++;
// 			bar.style.width = currrentWidth + '%';
// 		}, 3);
// 	}
// }

// function checkScroll() {
// 	// You have to check whether sill container is visible
// 	var coordinates = skillsContainer.getBoundingClientRect();
// 	if (!animationDone && coordinates.top <= window.innerHeight) {
// 		animationDone = true;
// 		console.log('Skills Section Visible');
// 		fillBars();
// 	}
// 	 else if (coordinates.top > window.innerHeight) {s
// 		animationDone = false;
// 		initialiseBars();
// 	}
// }
// let name=document.getElementById("")
// let email=
// let phone=
// let message=
function handleSubmit() {
	alert('Submitted Successfully');
	setTimeout(() => {
		document.getElementById('input-name').value = '';
		document.getElementById('input-email').value = '';
		document.getElementById('phone').value = '';
		document.getElementById('input-message').value = '';
	}, 100);
}
