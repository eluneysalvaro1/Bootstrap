d = document
w = window

header = d.getElementById("header")
firstCol = d.getElementById("firstCol")
secondCol = d.getElementById("secondCol")
thirdCol = d.getElementById("thirdCol")
firstFooter = d.getElementById("firstFooter")
secondFooter = d.getElementById("secondFooter")

widht = w.innerWidth
console.log(widht)

w.addEventListener("resize", e => {
    e.preventDefault()
    widht = w.innerWidth
    if (widht <= 768) {
        header.classList.replace('bg-success', 'bg-primary')
        firstCol.classList.add('text-start')
        secondCol.classList.add('text-end')
        firstCol.classList.replace('col-4', "col-6")
        secondCol.classList.replace('col-4', "col-6")
        thirdCol.classList.replace("col-4", "row")
        thirdCol.classList.replace("bg-danger", "bg-success")
    }
})

scroll = d.scroll
console.log(scroll)

// d.addEventListener("scroll", e => {
//             scroll = d.scroll
//             console.log(scroll)
//         }