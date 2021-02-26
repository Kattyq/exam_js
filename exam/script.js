
function showMainScreen() {
    let navigation = document.createElement('div')
    let buttonBlock = document.createElement('div')
    let buttonSlider = document.createElement('button')
    let buttonImage = document.createElement('button')

    buttonSlider.innerHTML = 'Slider'
    buttonImage.innerHTML = 'Image'

    navigation.classList.add('navigation')
    buttonBlock.classList.add('buttonBlock')
    buttonSlider.classList.add('buttonSlider')
    buttonImage.classList.add('buttonImage')

    document.body.appendChild(navigation)
    navigation.appendChild(buttonBlock)
    buttonBlock.appendChild(buttonSlider)
    buttonBlock.appendChild(buttonImage)

    let section = document.createElement('section')
    let sliderContainer = document.createElement('div')
    let slider = document.createElement('div')
    let nav = document.createElement('div')
    let spanPrev = document.createElement('span')
    let spanNext = document.createElement('span')

    section.classList.add('section')
    sliderContainer.classList.add('slider-container')
    slider.classList.add('slider')
    nav.classList.add('nav')
    spanPrev.classList.add('prev')
    spanNext.classList.add('next')

    spanPrev.innerHTML = '&lt'
    spanNext.innerHTML = '&gt'
    
    document.body.appendChild(section)

    function showSlider() {
        document.querySelector('.section') ? document.querySelector('.section').remove() : null;

        let section = document.createElement('section');
        document.body.appendChild(section)

        section.classList.add('section')

        section.appendChild(sliderContainer)
        sliderContainer.appendChild(slider)
        section.appendChild(nav)
        nav.appendChild(spanPrev)
        nav.appendChild(spanNext)

        let imgArr = new Array (17)
        imgArr.fill('')
        imgArr.map((item, index) => {
            let newImg = new Image();
            newImg.src = `./images/image_${index+1}.jpg`
            slider.appendChild(newImg)

            newImg.addEventListener('click', (event) => {
                modalWindow(event.currentTarget)
            })
        })

        // function resize() {
        //     if (!running) {
        //         running = true;
        // }
        // window.addEventListener('resize', () => {
        //     x = x-1
        //     // sliderContainer.style.maxWidth = imgWidth.clientWidth * x + 'px'
            
        //     showSlider(x)
        //     console.log(x)
        //   });

        let x = 5

        let imgWidth = document.querySelector('.slider img:first-child')
        sliderContainer.style.maxWidth = imgWidth.clientWidth * x + 'px'
        
        console.log(slider.clientWidth)

            let position = 0;
            let interval = 350;

        spanPrev.addEventListener('click', () => {
            position += interval;
            slider.style.marginLeft = `${-position}px`
            let slide = document.querySelector('.slider img:last-child')
            slider.prepend(slide)
            slider.style.transform = `translate3d(${position}px, 0, 0)`
        })
        spanNext.addEventListener('click', () => {
            position -= interval;
            
            slider.style.transform = `translate3d(${position}px, 0, 0)`
            // setTimeout( () => {
            let slide = document.querySelector('.slider img:first-child')
            slider.appendChild(slide)
            slider.style.marginLeft = `${-position}px`
            // }, 3000)
        })
    }

    function showImage() {
        document.querySelector('.section') ? document.querySelector('.section').remove() : null;
        
        let section = document.createElement('section');
        console.log(section)

        section.classList.add('section')
        document.body.appendChild(section)

        let imageBlock = document.createElement('div')

        imageBlock.classList.add('image-block')

        section.appendChild(imageBlock)

        let imgArr = new Array (16)
        imgArr.fill('')

        imgArr.map((item, index) => {
            let newImg = new Image();
            console.log(newImg)
            newImg.src = `./images/image_${index+1}.jpg`
            imageBlock.appendChild(newImg)

            newImg.addEventListener('click', (event) => {
                console.log(event.currentTarget)
                modalWindow(event.currentTarget)
            })
        })
    }

    buttonSlider.addEventListener('click', () => {
        showSlider()
    })
    buttonImage.addEventListener('click', () => {
        showImage()
    })
}
showMainScreen()

function modalWindow(img) {
    console.dir(img)
    let modalWrapper = document.createElement('div')
    document.body.appendChild(modalWrapper)
    modalWrapper.classList.add('modalWrapper')

    let buttonModalClose = document.createElement('button')
    buttonModalClose.classList.add('buttonModalClose')
    buttonModalClose.innerHTML = 'Close'
    modalWrapper.appendChild(buttonModalClose)

    let modalContent = document.createElement('div')
    modalWrapper.appendChild(modalContent)

    modalContent.innerHTML = img.outerHTML
    modalContent.classList.add('modalContent')

    buttonModalClose.addEventListener('click', () => {
        modalWrapper.classList.add('show');
    })  
}

