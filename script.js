let allQuoteObject = [
    { id: 1, quote: 'من هیچ استعداد خاصی ندارم. فقط از روی علاقه کنجکاوم  ', Author: 'آلبرت انیشتین', },
    { id: 2, quote: 'آرام و هوشمندانه. آنان که سریع می دوند، سکندری می خورند', Author: 'ویلیام شکسپیر', },
    { id: 3, quote: 'اگر درباره مردم قضاوت کنید، دیگر فرصتی برای دوست داشتن آنها ندارید', Author: 'مادر ترزا', },
    { id: 4, quote: 'هر وقت خود را در میان اکثریت دیدید، وقت آن رسیده است که مکث کنید و تأمل کنید ', Author: 'مارم تواین', },
    { id: 5, quote: 'ما نتیجه اندیشه‌مان هستیم ', Author: 'بودا', },
    { id: 6, quote: 'هنوز هم شجاعانه ترین کار این است که خودتان فکر کنید. آن هم با صدای بلند', Author: 'کوکو شنل', },
    { id: 7, quote: 'آینده متعلق به کسانی است که امروز خود را برای آن آماده می کنند', Author: 'مالکوم ایکس', },
    { id: 8, quote: 'جنگجوی موفق انسان متوسطی است که مثل لیزر تمرکز می کند', Author: 'بروسلی', },
    { id: 9, quote: 'کسانی که جرئت شکست های ناگوار را دارند، کسانی هستند که به موفقیت های بزرگ دست پیدا می کنند', Author: 'جان اف کندی', },
    { id: 10, quote: 'روزها را حساب نکنید، کاری کنید که روزها حساب شوند', Author: 'محمد علی کلی', },
]
let newQuote = document.querySelector('.btn')
let quoteAuthor = document.querySelector('#quote-author')
let quoteText = document.querySelector('#quote-text')

function newQuoteFunction() {

    let randomIndexQuote = Math.ceil(Math.random() * allQuoteObject.length)

    let isInArray = allQuoteObject.find(function (item) {
        return item.id === randomIndexQuote
    })

    if (isInArray === isInArray) {
        let randomIndexQuote = Math.ceil(Math.random() * allQuoteObject.length)

        let isInArray = allQuoteObject.find(function (item) {
            return item.id === randomIndexQuote
        })
        quoteText.innerHTML = isInArray.quote
        quoteAuthor.innerHTML = ' " ' + isInArray.Author + ' " '
    }
}

newQuote.addEventListener('click', newQuoteFunction)

