'use strict'

class Slider {
	constructor({slider, img, image}) {
		this.slider = document.querySelectorAll(slider);
		this.img = document.querySelectorAll(img);
		this.image = document.querySelectorAll(image);
	}

	move(){
		this.slider.forEach((i) => {
			i.addEventListener('mousemove', (el) => {
				let t = el.target;
			if(t.parentElement.classList == 'img'){
				t.parentElement.style.width = el.offsetX + 'px';
			}
			else {t.previousElementSibling.style.width = el.offsetX + 'px';}
			})
		})
	}

	defaultSettings(){
		this.img.forEach((i) => {
			i.style.width = this.img.clientWidth / 2 + 'px'
		})
		this.image.forEach((i) => {
			i.style.width = this.img.clientWidth + 'px'
		})
		this.slider.forEach((i) => {
			i.style.width = this.img.clientWidth + 'px'
		})
	}

	init() {
		this.defaultSettings();
		this.move();
	}
}
