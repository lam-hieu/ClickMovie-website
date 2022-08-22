const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const arrows = $$('.arrow-right')
const movieList = $$('.movie-list')

arrows.forEach((arrow, index) => {
    const itemNumber = movieList[index].querySelectorAll("img").length; //đến số phần từ mảng trong mảng (phim trong listphim)
    // console.log(itemNumber)
    let clickCounter = 0;
    arrow.addEventListener('click', () => {
        const ration = Math.floor(window.innerWidth / 320) //img discrease follow width / size img
        clickCounter++;
        if ((itemNumber - (5 + clickCounter) + (5 - ration)) >= 0) {
            movieList[index].style.transform = `
                translateX(${movieList[index].computedStyleMap().get('transform')[0].x.value - 400}px)`
        } else {
            movieList[index].style.transform = "translateX(0)"
            clickCounter = 0;
        }

    });
    console.log(window.innerWidth)
});


const circle = $(".toggle-circle")
const items = $$(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, #footer, .list-socials, .copy-right, .toggle")

circle.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
    circle.classList.toggle("active")
})