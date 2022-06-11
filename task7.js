function selectionSort(inputArr) {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
}

console.log(selectionSort([5, 2, 7, 3, 1]));


//الگوریتم

//این مرتب سازی به این گونه است که هر عدد با بقیه مقایسه شده و اگر کوچیک ترین بود اول قرار میگیرد
// پس مرحله اول این است که یک فانکشن تعریف کنیم که ارایه نامرتب رو بگیره
// مرحله دوم یک متغییر لازم داریم که بیاد تعداد خونه های ارایه رو بریزه تو خودش
//  مرحله بعد میایم با زدن یک حلقه روی ارایه کوچیک ترین عدد را پیدا میکنیم
// مرحله بعد هم میایم برسی میکنیم اگر عدد ما از بقیه عداد کوچیک تر بود ان را درون خانه اول بریزه