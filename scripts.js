// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
// document.getElementById("image").src = "moon.jpg";

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
// document.getElementById("caption").innerHTML = "القمر";

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1

// function changeMode() {
//   document.getElementById("image").src = "moon.jpg";
//   document.getElementById("caption").innerHTML = "القمر";
// }

// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
    يتغير لون إطار البطاقة للأبيض
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/

let darkMode = false;
function changeMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.getElementById("image").src = "./images/moon.jpg";
    document.getElementById("caption").innerHTML = "القمر";
    document.body.style.backgroundColor = "grey";
  } else {
    document.getElementById("image").src = "./images/sun.jpg";
    document.getElementById("caption").innerHTML = "الشمس";
    document.body.style.backgroundColor = "white";
  }
}
