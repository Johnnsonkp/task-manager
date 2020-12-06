const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const panels = document.querySelectorAll('.panel')

let currentActive = 0

panels.forEach(panel => {
    next.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add("active")
    })
})

panels.forEach(panel => {
    prev.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add("active")
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}



next.addEventListener('click', () => {
    currentActive++
    // panels.forEach(panel => {
    //     removeActiveClasses()
    //     panel.classList.add("active")
    // })

    if(currentActive > circles.length) {
        currentActive = circles.length
    }


    update()
})

prev.addEventListener('click', () => {
    currentActive--
    // panels.forEach(panel => {
    //     removeActiveClasses()
    //     panel.classList.add("active")
    // })

    if(currentActive < 1) {
        currentActive = 0
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


