const toggleBtn = document.querySelector(".toggle");
const ul = document.querySelector("nav ul");
const mainLinks = document.querySelectorAll("nav ul li");
const options = document.querySelectorAll(".options li");
const optionTitle = document.querySelector(".option-title");
const optionDesc = document.querySelector(".option-desc");
const distanceNumber = document.querySelector(".km .number");
const periodNumber = document.querySelector(".period .number");
const optionImg = document.querySelector(".option-img");
const swipeSpans = document.querySelectorAll(".swipe span");
const crewImg = document.querySelector(".crew-img");
const crewDesc = document.querySelector(".crew-desc");
const memberProfession = document.querySelector(".profession");
const memberName = document.querySelector(".name");
const counterUl = document.querySelectorAll("ul.counter li");
const technoImg = document.querySelector(".techno-img");
const technoDesc = document.querySelector(".techno-desc");
const technoTitle = document.querySelector(".techno-title");

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.src.includes("hamburger")) {
    toggleBtn.src =
      "https://space-tourism-multi-page-website-one.vercel.app/assets/shared/icon-close.svg";
  } else {
    toggleBtn.src =
      "https://space-tourism-multi-page-website-one.vercel.app/assets/shared/icon-hamburger.svg";
  }
  ul.classList.toggle("shown");
});

mainLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedOption = option.textContent.toLowerCase();
        optionImg.src = `https://space-tourism-multi-page-website-one.vercel.app/assets/destination/image-${option.textContent.toLowerCase()}.webp`;
        if (selectedOption in data.destination) {
          optionTitle.textContent = option.textContent;
          optionDesc.textContent = data.destination[selectedOption].desc;
          distanceNumber.textContent =
            data.destination[selectedOption].distance;
          periodNumber.textContent = data.destination[selectedOption].period;
        } else {
          console.error("Error: Invalid option selected");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

swipeSpans.forEach((span, index) => {
  span.addEventListener("click", () => {
    swipeSpans.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const crew = Object.keys(data.crew);
        crewImg.src = data.crew[crew[index]]["img"];
        crewDesc.textContent = data.crew[crew[index]]["desc"];
        memberName.textContent = data.crew[crew[index]]["name"];
        memberProfession.textContent = data.crew[crew[index]]["profession"];
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

counterUl.forEach((li, index) => {
  li.addEventListener("click", () => {
    counterUl.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const techno = Object.keys(data.techno);
        technoImg.src = data.techno[techno[index]]["img"];
        technoDesc.textContent = data.techno[techno[index]]["description"];
        technoTitle.textContent = data.techno[techno[index]]["title"];
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
