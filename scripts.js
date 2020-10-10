// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
// let image = document.getElementById("image");
// image.scr = "./images/moon.jpg"

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
// let title = document.getElementById("caption")
// console.log(title);
// title.innerHTML = "Moon"

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function switchPlanets(){
    let title = document.getElementById("caption");
    let image = document.getElementById("image");
    
if (title.innerHTML == "Moon") {
    
    title.innerHTML = "Sun";
    image.src = "./images/sun.jpg";
    body.style.background = `linear-gradient(62deg, #e07232 0%, #daae3f 1500%)`;
    

} else {
    title.innerHTML = "Moon"
    image.src = "./images/moon.jpg";
    body.style.background = `linear-gradient(135deg, #1890e0 0%, #141edb 1500%)`;    
}

}
 

// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية



/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
