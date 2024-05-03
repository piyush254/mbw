
onLoad();
function onLoad(){
  addingCard()
  mynavlink();
  buttonHiding();
  headerAnimation();
}

function addingCard() {
  let mycards = document.querySelector(".cards1");
  const cards = [
    {
      color: "blue",
      heading: "Custom Enterprise",
      heading1: "Software",
      about:
        "Develop and implement custom software solutions for large enterprises to improve productivity and streamline operations",
    },
    {
      color: "#02ccba",
      heading: "Cloud-Based",
      heading1: "Solutions",
      about:
        "Develop and integrate cloud-based software solutions for businesses that require flexibility and accessibility.",
    },
    {
      color: "#fff200",
      heading: "Cloud-Based",
      heading1: "Solutions",
      about:
        "Develop and integrate cloud-based software solutions for businesses that require flexibility and accessibility.",
    },
    {
      color: "#e74860",
      heading: "Cloud-Based",
      heading1: "Solutions",
      about:
        "Develop and integrate cloud-based software solutions for businesses that require flexibility and accessibility.",
    },
    {
      color: "#42545e",
      heading: "Cloud-Based",
      heading1: "Solutions",
      about:
        "Develop and integrate cloud-based software solutions for businesses that require flexibility and accessibility.",
    },
  ];
  cards.forEach((element) => {
    mycards.innerHTML += `<div class="card mycard" style="width: 25rem;  border-top: 6px solid #42545e;">
    <div class="card-body">
      <h4></h4>
      <span  class="spanBlue">${element.heading}</span><span  class="spanRed">${element.heading1}</span>
      <p class="card-text">
      ${element.about}
      </p>
    </div>
  </div>`;
  });
}
function buttonHiding() {
  let mynavbtn = document.querySelector(".mynavbtn");
  // console.log(mynavbtn);
  let getInTouch = document.querySelector(".getInTouch");
  mynavbtn.addEventListener("click", () => {
    mynavbtn.style.backgroundColor = "#ff9047";
  });
  mynavbtn.addEventListener("mouseenter", () => {
    getInTouch.style.display = "none";
  });

  mynavbtn.addEventListener("mouseleave", () => {
    // Hide the element with id "getInTouch"
    getInTouch.style.display = "block";
  });
}
function mynavlink() {
  let mynav_link = document.querySelector(".mynav-link");
  let softwareServices1 = document.querySelector(".softwareServices1");

  mynav_link.addEventListener("mouseenter", () => {
    softwareServices1.style.display = "block";
  });

  mynav_link.addEventListener("mouseleave", () => {
    softwareServices1.style.display = "none";
  });

  softwareServices1.addEventListener("mouseenter", () => {
    softwareServices1.style.display = "block";
  });
  softwareServices1.addEventListener("mouseleave", () => {
    softwareServices1.style.display = "none";
  });
  let mynav_link2 = document.querySelector(".mynav-link2");
  let softwareServices2 = document.querySelector(".softwareServices2");

  mynav_link2.addEventListener("mouseenter", () => {
    softwareServices2.style.display = "block";
  });

  mynav_link2.addEventListener("mouseleave", () => {
    softwareServices2.style.display = "none";
  });

  softwareServices2.addEventListener("mouseenter", () => {
    softwareServices2.style.display = "block";
  });
  softwareServices2.addEventListener("mouseleave", () => {
    softwareServices2.style.display = "none";
  });
}

function headerAnimation() {
  window.addEventListener("scroll", function () {
    let header = document.getElementsByTagName("header")[0];
    if (window.scrollY > 200) {
      // Adjust the threshold as needed
      header.style.top = "0px"; // Stick the header to the top of the viewport
    } else {
      header.style.top = "-200px"; // Move the header above the viewport
    }
  });
}