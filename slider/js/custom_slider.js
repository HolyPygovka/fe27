let moveNum = 0;

let customSlider = document.querySelector('.custom_slider');

customSlider.customSlider = function(sliderSettings) {
    const slidesOffset = sliderSettings.slideWidth;
    buildSlider();

    let nextSlideBtn = document.querySelector('.custom_slider .next_slide');
    let prevSlideBtn = document.querySelector('.custom_slider .prev_slide');

    nextSlideBtn.addEventListener('click', nextSlideClick);
    prevSlideBtn.addEventListener('click', prevSlideClick);

    function nextSlideClick() {
        moveNum = moveNum - slidesOffset;
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        innerContainer.style.transform = `translate(${moveNum}px, 0)`;
    }
    
    function prevSlideClick() {
        moveNum = moveNum + slidesOffset;
        let customSlider = this.closest('.custom_slider');
        let innerContainer = customSlider.querySelector('.inner_container');
        innerContainer.style.transform = `translate(${moveNum}px, 0)`;
    }
}

function buildSlider() {
    let oneSlideArr = customSlider.querySelectorAll('div');
    oneSlideArr.forEach(item => item.classList.add('one_slide'));

    customSlider.innerHTML = `        
        <div class="outer_container">
            <div class="inner_container">
                ${customSlider.innerHTML}
            </div>
        </div>
        <div class="navs">
            <a href="#" class="prev_slide"><</a>
            <a href="#" class="next_slide">></a>
        </div>`
}