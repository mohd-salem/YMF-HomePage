var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true,
  });
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["دواء", "تحاليل", "استشارات هاتفية", "خدمات تمريضية"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 10);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

let buttonMail = document.getElementById("subscribeNow");
let phoneNum = document.getElementById("phoneNum");
let regexFalse = document.getElementById("regexFalse");

phoneNum.addEventListener("change", (e) => {
  phoneNum = e.target.value;
});

buttonMail.addEventListener("click", () => {
  phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  phoneReg = phoneReg.test(phoneNum);
  if (phoneReg) {
    regexFalse.innerHTML ='';
    mail();
  } else {
    regexFalse.innerHTML = ` <div class=" alert alert-danger d-flex align-items-center" role="alert">
             
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>

   <div>
     من فضلك ادخل رقم هاتف صحيح
   </div>
   </div>`;
    console.log(regexFalse);
  }
});

function mail() {
  var data = {
    service_id: "service_ueyxltt",
    template_id: "template_un2vgnk",
    user_id: "w0s1KD9m9ad4X41sI",

    template_params: {
      username: "werr",
      phoneNum: phoneNum,
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };

  $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  })
    .done(function () {
      regexFalse.innerHTML = ` <div class="alert alert-success d-flex align-items-center" role="alert">
             
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>

      <div>
تم ارسال الرقم بنجاح </div>
      </div>`;
    })
    .fail(function (error) {
      regexFalse.innerHTML = ` <div class="alert alert-warning d-flex align-items-center" role="alert">
             
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>

      <div>
عذرا لم يتم استلام رقمكم <br> لطفا المحاولة مرة اخرى
      </div>
      </div>`;
    });
}


let clientName = document.getElementById("clientName");
let clientMail = document.getElementById("clientMail");
let clientProblem = document.getElementById("clientProblem");

clientName.addEventListener("change", (e) => {
  clientName = e.target.value;
})

clientMail.addEventListener("change", (e) => {
  clientMail = e.target.value;
});

clientProblem.addEventListener("change", (e) => {
  clientProblem = e.target.value;
});

contactBtn.addEventListener('click',()=>{
  let nameReg =  /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/;
  nameReg = nameReg.test(clientName);
  mailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/  ;
  mailReg = mailReg.test(clientMail);

if (nameReg && mailReg) {
  problemFalse.innerHTML = '<div></div>';
    contactUs()
} else {
  problemFalse.innerHTML = ` <div class=" alert alert-danger d-flex align-items-center" role="alert">
             
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>

   <div>
     من فضلك ادخل البيانات بشكل صحيح
   </div>
   </div>`;
  }
}
)

function contactUs(){
  console.log(clientName,clientMail,clientProblem)
    var data = {
      service_id: "service_ueyxltt",
      template_id: "template_i2si8wb",
      user_id: "w0s1KD9m9ad4X41sI",
  
      template_params: {
        username: "werr",
        "clientName": clientName,
        "clientMail":clientMail,
        "clientProblem":clientProblem,
        "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
      },
    };
  
    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        problemFalse.innerHTML = ` <div class="alert alert-success d-flex align-items-center" role="alert">
               
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
  
        <div>
  تم ارسال رسالتك بنجاح </div>
        </div>`;
      })
      .fail(function (error) {
        problemFalse.innerHTML = ` <div class="alert alert-warning d-flex align-items-center" role="alert">
               
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  
        <div>
  عذرا لم يتم استلام رسالتكم <br> لطفا المحاولة مرة اخرى
        </div>
        </div>`;
      });

  

}