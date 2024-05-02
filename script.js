onLoad();

function onLoad() {
  buttonHandling();
  headerSticky();
  mynavlink();
  buttonHiding();
  addingCard();
  iconMoving();
  movingCards();
  storysectionMaking();
}

function buttonHandling() {
  let mynavbtn = document.querySelector(".mynavbtn");
  let getInTouch = document.querySelector(".getInTouch");
  mynavbtn.addEventListener("click", () => {
    mynavbtn.style.backgroundColor = "#ff9047";
  });

  mynavbtn.addEventListener("mouseenter", () => {
    // Hide the element with id "getInTouch"
    getInTouch.style.display = "none";
  });

  mynavbtn.addEventListener("mouseleave", () => {
    // Hide the element with id "getInTouch"
    getInTouch.style.display = "block";
  });
}
function buttonHiding() {
  let mynavbtn = document.querySelector(".mybtn");
  let getInTouch = document.querySelector(".mygetspan");

  mynavbtn.addEventListener("click", () => {
    mynavbtn.style.backgroundColor = "#ff9047";
    console.log(1);
  });
  mynavbtn.addEventListener("mouseenter", () => {
    getInTouch.style.display = "none";
  });

  mynavbtn.addEventListener("mouseleave", () => {
    // Hide the element with id "getInTouch"
    getInTouch.style.display = "block";
  });
}

function headerSticky() {
  let header = document.getElementsByTagName("header")[0];
  let isSticky = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200 && !isSticky) {
      header.style.position = "sticky";
      header.style.top = "0px";
      isSticky = true;
    } else if (window.scrollY <= 100 && isSticky) {
      header.style.position = "static";
      isSticky = false;
    }
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

function addingCard() {
  let mycards = document.querySelector(".cards");
  const cards = [
    {
      color: "blue",
      heading: "IT Consultancy",
      about:
        "At our IT consultancy, we provide expert advice and guidance by focusing on the best practices for IT solutions and services.",
    },
    {
      color: "#02ccba",
      heading: "Managed IT",
      about:
        "Our managed IT services prioritize the best practices for IT solutions and services to ensure your systems run smoothly and efficiently.",
    },
    {
      color: "#fff200",
      heading: "IT Support",
      about:
        "Our IT support team is dedicated to providing the best possible service by focusing on the best practices for IT solutions and services.",
    },
    {
      color: "#e74860",
      heading: "Cloud computing",
      about:
        "We specialize in cloud computing solutions that adhere to the best practices for IT solutions and services, delivering reliable and secure access to your data.",
    },
    {
      color: "#42545e",
      heading: "Cyber security",
      about:
        "Protecting your business is our top priority, which is why we focus on the best practices for IT solutions and services to provide comprehensive cyber security solutions.",
    },
  ];
  cards.forEach((element) => {
    mycards.innerHTML += `  <div class="card mycard" style="width: 20rem;  border-top: 6px solid ${element.color};">
    <div class="card-body">
      <h4>${element.heading}</h4>
      <p class="card-text">
      ${element.about}
      </p>
    </div>
  </div>`;
  });
}

function iconMoving() {
  let scrollIcon = document.querySelector(".scrollIcon");
  const icons = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  icons.forEach((icon) => {
    scrollIcon.innerHTML += `<div class="iconImage">
    <i class="fa-solid fa-person-military-to-person fa-2xl" style="color: #74C0FC;"></i>
    <span>Bootsterio</span>
    </div>
  </div>`;
  });
}

function movingCards() {
  let movingCard = document.querySelector(".containerimage");
  const cards = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  cards.forEach((card) => {
    movingCard.innerHTML += `<div class="iconinfo">
      <span>
        <i class="fa-solid fa-child-dress fa-2xl" style="color: #FFF;"></i>
      </span>
      <h4>Computer Tranign</h4>
      <p class="text-white">We focus on the best practices for it solutions and services.</p>
      <a href="#">Read More <input type="checkbox"></a>
    </div> `;
  });
}

function storysectionMaking() {
  let storySection = document.querySelector(".storySection");
  const story = [
    {
      about:
        "MBW Tech far exceeded our expectations with their exceptional custom software development. Their expertise and dedication made us feel like truly valued partners. We experienced a remarkable return on investment within a short time.",
      author: "Jodi Henderson",
      role: "Software Developer",
    },
    {
      about:
        "Partnering with MBW Tech was a game-changer for our startup. Their custom software solution transformed our vision into a global success story. The exceptional service and support we received made all the difference.",
      author: "Hassan Ali",
      role: " Software Developer",
    },
    {
      about:
        "MBW Tech empowered our SME to scale new heights. Their end-to-end product design and development services were instrumental in launching our innovative solution. We're grateful for their expertise and guidance throughout the journey.",
      author: "Chris M",
      role: "Software Developer",
    },
  ];
  story.forEach((item) => {
    storySection.innerHTML += ` <div class="storyClients">
    <div class="aboutStory">
      <div class="glassicon">
        <i
          class="fa-solid fa-glass-water"
          style="color: #ff0000; font-size: 2rem"
        ></i>
        <i
          class="fa-solid fa-glass-water"
          style="color: #ff0000; font-size: 2rem"
        ></i>
      </div>
      ${item.about}
      <div class="trangle" style="border-left: 40px solid #f6f6f6"></div>
    </div>
    <h3>${item.author}</h3>
    <h4>${item.role}</h4>
  </div>`;
  });
}
