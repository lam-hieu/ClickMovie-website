const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const arrows = $$('.arrow-right')
const movieList = $$('.movie-list')

arrows.forEach((arrow, index) => {
    const itemNumber = movieList[index].querySelectorAll("img").length;
    console.log(itemNumber)
    let clickCounter = 0;
    arrow.addEventListener('click', () => {
        clickCounter++;
        if (itemNumber - (4 + clickCounter) >= 0) {
            movieList[index].style.transform = `
                translateX(${movieList[index].computedStyleMap().get('transform')[0].x.value - 400}px)`
        } else {
            movieList[index].style.transform = "translateX(0)"
            clickCounter = 0;
        }

    })
});


const circle = $(".toggle-circle")
const items = $$(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, #footer, .list-socials, .copy-right, .toggle")

circle.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
    circle.classList.toggle("active")
})