let dataArray = [96, 5, 42, 1, 6, 37, 21]
function insertSort(unsortedData) {
    for (let i = 1; i < unsortedData.length; i++) {
        let current = unsortedData[i];
        let j;
        for (j = i - 1; j >= 0 && unsortedData[j] > current; j--) {
            unsortedData[j + 1] = unsortedData[j]
        }
        unsortedData[j + 1] = current;
    }
    return unsortedData;
}
// print sorted array
console.log(insertSort(dataArray));

// الگوریتم

//در این مرتب سازی ما میایم عنصر فعلی رو با عنصر بعدی مقایسه میکنیم و اگر کوچیک تر بود اون رو قبل عنصر فعلی قرار میدیم
// پس یه فانکشن داریم که میاد لیست نامرتب رو میگیره
// درون فانکشن یه حلقه داریم که روی ارایه پیمایش میکنه و نتیجه رو داخل یه متغیر نگه میداره
// و مرحله بعدی قرار دادن عدد کوچیک تر قبل عدد بزرگ تره 