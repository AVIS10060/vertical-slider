const sliderContainer = document.querySelector('.slider-container');
const slideLeft =  document.querySelector('.right-slide');
const slideRight = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength =  slideRight.querySelectorAll('div').length

let activeSlideIndex = 0 ;

slideLeft.style.top=` -${(slidesLength-1)*100}vh`

upButton.addEventListener(`click`,()=> changeSlide('up'))
downButton.addEventListener(`click`,()=>changeSlide('down'))

const changeSlide = (direction) =>{
    const slidesHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex=0

        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1

        }
    }

slideLeft.style.transform = `translateY(${activeSlideIndex *  slidesHeight  }px)`
slideRight.style.transform = `translateY(-${activeSlideIndex *  slidesHeight  }px)`
}
