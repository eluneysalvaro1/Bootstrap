let d = document
let w = window
let header = d.getElementById("header")
let firstCol = d.getElementById("firstCol")
let secondCol = d.getElementById("secondCol")
let thirdCol = d.getElementById("thirdCol")
let firstFooter = d.getElementById("firstFooter")
let secondFooter = d.getElementById("secondFooter")
widht = w.innerWidth
let s = 576
let md = 768
let lg = 992
let xl = 1200
let xxl = 1400
w.addEventListener("resize", e => {
    e.preventDefault()
    widht = w.innerWidth
    if (widht <= s) {
        sFunc()
    } else if (widht >= md && widht < xl) {
        mFunc()
    } else if (widht >= xl) {
        lgFunc()
    }
})


const sFunc = () => {
    //Header    
    header.classList.remove('bg-primary', 'bg-success', 'text-start')
    header.classList.add('bg-warning', 'text-center')
        //Primer Columna
    firstCol.classList.remove('col-6', 'col-4', 'text-center')
    firstCol.classList.add('text-start', 'col-12')
        //Segunda Columna
    secondCol.classList.remove('text-end', 'bg-danger', 'col-4')
    secondCol.classList.add('text-center', 'bg-primary', 'col-12')
        //Tercer Columna
    thirdCol.classList.remove('col-4', 'bg-success', 'text-center')
    thirdCol.classList.add("bg-danger", 'col-12', 'text-end')
        //Primer Footer
    firstFooter.classList.remove('col-6', 'text-start', 'text-end')
    firstFooter.classList.add('col-12', 'text-center')
        //Segundo Footer
    secondFooter.classList.remove('col-6', 'text-start', 'text-end')
    secondFooter.classList.add('col-12', 'text-center')
}

const mFunc = () => {
    //Header
    header.classList.remove('bg-warning', 'bg-success', 'text-center')
    header.classList.add('bg-primary', 'text-start')
        //Primer Columna
    firstCol.classList.remove('col-4', 'col-12', 'text-center')
    firstCol.classList.add('text-start', 'col-6')
        //Segunda Columna
    secondCol.classList.remove('text-center', 'col-12', 'col-4', 'bg-secondary')
    secondCol.classList.add('text-end', 'col-6', 'bg-danger')
        //Tercer Columna
    thirdCol.classList.remove('col-4', 'bg-danger', 'text-end')
    thirdCol.classList.add("bg-success", 'col-12', 'text-center')
        //Primer Footer
    firstFooter.classList.remove('col-6', 'text-start', 'text-end')
    firstFooter.classList.add('col-12', 'text-center')
        //Segundo Footer
    secondFooter.classList.remove('col-6', 'text-start', 'text-end')
    secondFooter.classList.add('col-12', 'text-center')
}

const lgFunc = () => {
    //Header
    header.classList.remove('bg-warning', 'bg-success', 'bg-primary', 'text-center', 'bg-primary')
    header.classList.add('bg-success', 'text-start')
        //Primer Columna
    firstCol.classList.remove('col-6', 'col-12', 'text-start')
    firstCol.classList.add('text-center', 'col-4')
        //Segunda Columna
    secondCol.classList.remove('col-12', 'col-6', 'bg-primary', 'text-end')
    secondCol.classList.add('text-center', 'col-4', 'bg-danger')
        //Tercer Columna
    thirdCol.classList.remove('col-6', 'col-12', 'bg-success', 'text-end')
    thirdCol.classList.add("bg-danger", 'col-4', 'text-center')
        //Primer Footer
    firstFooter.classList.remove('col-12', 'text-center', 'text-end')
    firstFooter.classList.add('col-6', 'text-end')
        //Segundo Footer
    secondFooter.classList.remove('col-12', 'text-center', 'text-end')
    secondFooter.classList.add('col-6', 'text-start')
}