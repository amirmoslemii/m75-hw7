let count = 0
let myarr = []
function sumNum(start, end) {
    while (start <= end) {
        myarr.push(start++)
    }
    for (let i = 0; i < myarr.length; i++) {
        count += myarr[i]
    } console.log(count);
}

sumNum(1, 3)


//الگوریتم

// یه متغییر داریم که از شروع تا پایان عدد ورودی داخلش سیو میشه
// یه حلقه داریم که تا زمانی که عدد شروع به عدد پایان نرسیده میاد هربار به عدد شروع اضافه میکنه و میریزه داخل متغیر
// یه حلقه داریم که میاد اعداد داخل ارایه یا متغییر رو با هم جمع میکنه