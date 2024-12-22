// let items = document.querySelectorAll(".slider .item")
// let next = document.getElementById("next")
// let prev = document.getElementById("prev")
// let active = 3

// function fun() {
//     let stt = 0
//     items[active].style.transform = `none`;
//     items[active].style.zIndex = 1;
//     items[active].style.filter = 'none';
//     items[active].style.opacity = 1


//     for (var i = active + 1; i < items.length; i++) {
//         stt++;
//         items[i].style.transform = `translateX(${120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(-1deg)`;
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = 'blur(5px)';
//         items[i].style.opacity = stt > 2 ? 0 : 0.6

//     }
//     stt = 0;
//     for (var i = active - 1; i >= 0; i--) {
//         stt++;
//         items[i].style.transform = `translateX(${-120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(1deg)`;
//         items[i].style.zIndex = -stt;
//         items[i].style.filter = 'blur(5px)';
//         items[i].style.opacity = stt > 2 ? 0 : 0.6;
//     }
// }
// fun()
// next.addEventListener("click", function() {
//     active = active + 1 < items.length ? active + 1 : active;
//     fun()


// })
// prev.addEventListener("click", function() {
//     active = active - 1 < items.length ? active - 1 : active;
//     fun()
// })
// 
//
// let next = document.getElementById("next")
// let prev = document.getElementById("prev")
// let carousel = document.querySelector(".carousel")
// let items = document.querySelectorAll(".carousel .item")
// let countTime = items.length;
// let active = 1
// let other_1 = null
// let other_2 = null

// next.onclick = () => {
//     active = active + 1 >= countTime ? 0 : active + 1;
//     other_1 = active - 1 < 0 ? countTime - 1 : active - 1;
//     other_2 = active + 1 >= countTime ? 0 : active + 1;
//     Change()
// }
// prev.onclick = () => {
//     carousel.classList.remove("next")
//     carousel.classList.remove("prev")
//     active = active - 1 < 0 ? countTime - 1 : active - 1;
//     other_1 = active + 1 >= countTime ? 0 : active + 1;
//     other_2 = other_1 + 1 >= countTime ? 0 : other_1 + 1
//     Change()



// }
// const Change = () => {
//     let itenActive = document.querySelector(".carousel .item.active")
//     if (itenActive) itenActive.classList.remove("active")

//     let itenOldOther_1 = document.querySelector(".carousel .item.other-1")
//     if (itenOldOther_1) itenOldOther_1.classList.remove("other-1")

//     let itenOldOther_2 = document.querySelector(".carousel .item.other-2")
//     if (itenOldOther_2) itenOldOther_2.classList.remove("other-2")

//     items.forEach(el => {
//         el.querySelector("image img").style.animation = "none"
//         el.querySelector("image figcaption").style.animation = "none"
//         void el.offsetWidth;
//         el.querySelector("image img").style.animation = ""
//         el.querySelector("image figcaption").style.animation = ""



//     })
//     items[active].classList.add("active")
//     items[other_1].classList.add("other-1")
//     items[other_2].classList.add("other_2")


// }
// تحديد العناصر في الصفحة
// let next = document.getElementById('next');
// let prev = document.getElementById('prev');
// let carousel = document.querySelector('.carousel');
// let items = document.querySelectorAll('.carousel .item');
// console.log(items)
// let countItem = items.length;
// let active = 1;
// let other_1 = null;
// let other_2 = null;

// // عند النقر على زر "التالي"
// next.onclick = () => {
//     // إزالة وإضافة فئات CSS للتحكم في الانتقال
//     carousel.classList.remove('prev');
//     carousel.classList.add('next');
//     // تحديث قيمة العنصر النشط والعنصرين الآخرين
//     active = active + 1 >= countItem ? 0 : active + 1;
//     other_1 = active - 1 < 1 ? countItem - 1 : active - 1;
//     other_2 = active + 1 >= countItem ? 0 : active + 1;
//     // تحديث عرض العناصر
//     changeSlider();
// };

// // عند النقر على زر "السابق"
// prev.onclick = () => {
//     // إزالة وإضافة فئات CSS للتحكم في الانتقال
//     carousel.classList.remove('next');
//     carousel.classList.add('prev');
//     // تحديث قيمة العنصر النشط والعنصرين الآخرين
//     active = active - 1 < 0 ? countItem : active - 1;
//     other_1 = active + 1 >= countItem ? 0 : active + 1;
//     other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
//     // تحديث عرض العناصر
//     changeSlider();
// };

// // دالة لتحديث عرض العناصر
// const changeSlider = () => {
//     // إزالة فئة "active" من العنصر النشط الحالي
//     let itemOldActive = document.querySelector('.carousel .item.active');
//     if (itemOldActive) itemOldActive.classList.remove('active');
//     // إزالة فئة "other_1" من العنصر الثاني
//     let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
//     if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');
//     // إزالة فئة "other_2" من العنصر الثالث
//     let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
//     if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');
//     // إضافة الفئات المناسبة للعناصر الجديدة
//     items.forEach(e => {
//         e.querySelector('.image img').style.animation = 'none';
//         e.querySelector('.image figcaption').style.animation = 'none';
//         void e.offsetWidth;
//         e.querySelector('.image img').style.animation = '';
//     });
// };
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;

const updateItems = () => {
    items.forEach((item, index) => {
        item.classList.remove('active', 'other_1', 'other_2');
        if (index === active) {
            item.classList.add('active');
        } else if (index === (active + 1) % countItem) {
            item.classList.add('other_1');
        } else if (index === (active + 2) % countItem) {
            item.classList.add('other_2');
        }
    });
};

next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active = (active + 1) % countItem;
    updateItems();
};

prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = (active - 1 + countItem) % countItem;
    updateItems();
};

updateItems();