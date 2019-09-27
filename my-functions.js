const accordions = document.querySelectorAll('.accordion-digital-marketing h6')


function getElements() {

  let i = 0;

  for (i = 0; i < accordions.length; i++) {
    let node = accordions[i];
    let string = accordions[i].textContent;

    let arr = string.split(' ');
    let acronym = arr[0];
    arr = arr.slice(1);
    arr = arr.join(' ');

    if (acronym.length != 1) {
      node.innerHTML = ('<span class="accordion-item">' + acronym + ' </span>' + arr + '<span class="accordion-icon"></span>');
      const spanItem = document.querySelectorAll(".accordion-item")

      spanItem.forEach(element => {
        element.style.fontWeight = "900";
        element.style.marginRight = "100px";
        element.style.fontSize = "2rem";
      })
    }
  }
}

getElements();

let testimonialItem = document.querySelectorAll(".testimonial-item");
let testimonialName = document.querySelectorAll(".tm-testimonial.style-carousel .testimonial-name");
let mainCoursesTitle = document.querySelectorAll(".available-courses-main-title");
let secondaryCoursesTitle = document.querySelectorAll(".available-courses-secondary-title");

let orange = {
  boxShadow: "0 25px 60px 0 rgba(236, 113, 75, 0.97)",
  color: "rgba(236, 113, 75, 0.97)"
}

let pink = {
  boxShadow: "0 25px 60px 0 #db4bec",
  color: "#db4bec"
}

let blue = {
  boxShadow: "0 25px 60px 0 #4060e1",
  color: "#4060e1"
}

let green = {
  boxShadow: "0 25px 60px 0 #4becac",
  color: "#4becac"
}

let cyan = {
  boxShadow: "0 25px 60px 0 #35ffff",
  color: "#35ffff"
}

if(testimonialItem && testimonialName){
  testimonialItem[0].style.boxShadow = orange.boxShadow;
  testimonialItem[1].style.boxShadow = pink.boxShadow;
  testimonialItem[2].style.boxShadow = blue.boxShadow;
  testimonialItem[3].style.boxShadow = green.boxShadow;
  
  testimonialName[0].style.color = orange.color;
  testimonialName[1].style.color = pink.color;
  testimonialName[2].style.color = blue.color;
  testimonialName[3].style.color = green.color;	
} else {
  console.log('oi');
}



if(mainCoursesTitle){
  mainCoursesTitle[0].style.color = orange.color;
  //mainCoursesTitle[1].style.color = pink.color;
  //mainCoursesTitle[2].style.color = blue.color;		
  //mainCoursesTitle[3].style.color = green.color;				
  //mainCoursesTitle[4].style.color = cyan.color;//
} else {
  console.log('não deu');
}