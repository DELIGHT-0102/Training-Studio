let text =document.getElementById("text")
let red =document.getElementById("red")
let image2 = document.getElementById ("image12")

function First_training() {
    image2.src="/asset/training-image-01.jpg"
    text.innerHTML="First Training Class"
    red.innerHTML="Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui <br> eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem <br> fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, <br> molestie nunc ut, accumsan diam."   
}
function Second_training() {
    
image2.src="/asset/training-image-02.jpg"
text.innerHTML="Second Training Class"
red.innerHTML="Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam <br> tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam <br> tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros.<br> Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br> mus."
}
function Third_training() {
    
image2.src="/asset/training-image-03.jpg"
text.innerHTML="Third Training class"
red.innerHTML="Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque <br> posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate <br> sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque <br> pharetra semper vel, accumsan a neque."
}

function Fourth_training() {
    

image2.src="/asset/training-image-04.jpg"
text.innerHTML="Fourth Training class"
red.innerHTML="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac <br> turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci <br> lectus, eget venenatis ipsum commodo et."
}

let fit1=document.getElementById("fit1")
let fit2=document.getElementById("fit2")
let mud1=document.getElementById("mud1")
let mud2=document.getElementById("mud2")
let bod1=document.getElementById("bod1")
let bod2=document.getElementById("bod2")
let yog1=document.getElementById("yog1")
let yog2=document.getElementById("yog2")
let adv1=document.getElementById("adv1")
let adv2=document.getElementById("adv2")

// function Monday() {
// fit1.innerHTML="10:00AM -11:30AM"
// bod2.innerHTML="2:00PM - 3:30PM"
// fit2.innerHTML=""
// mud1.innerHTML=""
// mud2.innerHTML=""
// bod1.innerHTML=""
// yog1.innerHTML=""
// yog2.innerHTML=""
// adv1.innerHTML=""
// adv2.innerHTML=""
// }
// function Tuesday() {
// fit2.innerHTML="2:00PM - 3:30PM"
// bod1.innerHTML="10:00AM - 11:30AM"
// fit1.innerHTML=""
// mud1.innerHTML=""
// mud2.innerHTML=""
// bod2.innerHTML=""
// yog1.innerHTML=""
// yog2.innerHTML=""
// adv1.innerHTML=""
// adv2.innerHTML=""
// }
// function Wednesday() {
// yog1.innerHTML="10:00AM - 11:30AM"
// adv2.innerHTML="2:00PM - 3:30PM"
// fit1.innerHTML=""
// fit2.innerHTML=""
// mud1.innerHTML=""
// mud2.innerHTML=""
// bod1.innerHTML=""
// bod2.innerHTML=""
// yog2.innerHTML=""
// adv1.innerHTML=""
// }

// function Thursday(){
// mud2.innerHTML="2:00PM - 3:30PM"
// adv1.innerHTML="10:00AM - 11:30AM"
// fit1.innerHTML=""
// fit2.innerHTML=""
// mud1.innerHTML=""
// bod1.innerHTML=""
// bod2.innerHTML=""
// yog1.innerHTML=""
// yog2.innerHTML=""
// adv2.innerHTML=""
// }

// function Friday() {
// mud1.innerHTML="10:00AM - 11:30AM"
// yog2.innerHTML="2:00PM - 3:30PM"
// fit1.innerHTML=""
// fit2.innerHTML=""
// mud2.innerHTML=""
// bod1.innerHTML=""
// bod2.innerHTML=""
// yog1.innerHTML=""
// adv1.innerHTML=""
// adv2.innerHTML=""
// }

window.addEventListener("scroll",function () {
    let anynm =document.getElementById ("anynm")
    let scroownum = 500
    if (pageYOffset>scroownum) {
        anynm.classList.add("anyname")
        
    } else {
        anynm.classList.remove("anyname")
    }   
})
