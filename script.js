const isMobile = window.matchMedia(
  "only screen and (max-width: 768px)"
).matches;
const names = document.getElementById("name");
let d1 = document.getElementById("d1");
let image = document.getElementById("myimage");
let demo = document.getElementById("demo");
let scrollLimit = 50000; // Set the scroll limit to 800px
let scrollPosition = 0; // Start scroll position
let istrue = false;
let startY = 0;

const hocont = document.getElementById("hocont");

// Function to create a container with the 4:3 aspect ratio
function createContainer() {
  const container = document.createElement("div");
  container.classList.add("hocont-item");

  return container;
}

// Function to create a grid of containers
function createGrid(numContainers) {
  for (let i = 0; i < numContainers; i++) {
    const container = createContainer();
    hocont.appendChild(container);
  }
}

// Create a grid of 10 containers
createGrid(200); // Adjust the number of containers as needed

function scrolll(e) {
  e.preventDefault();
}
if (!isMobile) {
  window.addEventListener("wheel", scrolll, { passive: false });
}

//scroll effect for mobile




// Prevent default behavior of the wheel (mouse scroll)
if (!isMobile) {
  window.addEventListener("wheel", function (e) {
    // This prevents the default scroll
    // Update scroll position manually based on wheel direction
    if (e.deltaY > 0) {
      scrollPosition += 30; // Scroll down (adjust step size as needed)
    } else {
      scrollPosition -= 30; // Scroll up (adjust step size as needed)
    }
    console.log(scrollPosition);
    // Ensure scroll position stays within limit
    if (scrollPosition > scrollLimit) {
      scrollPosition = scrollLimit;
    }
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    if (scrollPosition == 90) {
      istrue = true;
      let tool = document.getElementById("menu-bar");
      tool.style.background = "rgba(0, 0, 0, 0.5)"; // Semi-transparent background
      tool.style.backdropFilter = "blur(60px)"; // Apply blur to the background
      tool.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)"; // Add box shadow
    }
    if (scrollPosition < 90 && istrue) {
      let tool = document.getElementById("menu-bar");
      tool.style.background = "transparent"; // Semi-transparent background
      tool.style.backdropFilter = ""; // Apply blur to the background
      tool.style.boxShadow = ""; // Add box shadow
    }
    demo.innerHTML = scrollPosition;
    // Animate content based on scroll position
    d1.style.transform = `translateY(-${scrollPosition * 0.5}px) scale(${
      1 + scrollPosition / 1000
    })`;
    d1.style.opacity = 1 - scrollPosition / 200;
    // if(window.getComputedStyle(d1).opacity == 0){
    //   console.log('called');
    //   d1.style.display='none';
    // }else{
    //   d1.style.display='';
    // }

    if (scrollPosition < 150) {
      image.style.transform = `translateY(${scrollPosition * 0.5}px) scale(${
        0 + scrollPosition / 120
      })`;
      document.getElementById("p1").style.transform = `translateY(-${
        scrollPosition * 0.5
      }px)`;
      names.style.transform = `translateY(-${scrollPosition * 0.5}px) scale(${
        1 + scrollPosition / 100
      })`;
      // image.style.transform = ``;
      image.style.opacity = 0 + scrollPosition / 200;
      document.getElementById("p1").style.opacity = 0;
    } else {
      image.style.opacity = 1;
      document.getElementById("p1").style.opacity = 1;
    }
    if (scrollPosition >= 240) {
      console.log("trying");
      window.removeEventListener("wheel", scrolll);
    } else {
      window.addEventListener("wheel", scrolll, { passive: false });
    }

    // Update the page scroll position manually (to prevent page from actually scrolling)
    //   window.scrollTo(0, scrollPosition);
  });
}
// Scroll event listener (for animation purposes)
window.addEventListener("scroll", function () {
  console.log("hello");
});

const backgrounds = [
  "Assets/image.png",
  "Assets/1.png",
  "Assets/2.png",
  "Assets/3.png",
  "Assets/5.png",
  "Assets/5.png",
  "Assets/6.png",
];
var elementr = document.querySelectorAll(".hocont-item");
console.log(elementr);

// Function to generate a random number for rotation
function getRandomRotation() {
  // Random value between -360 and 360 degrees
  return Math.floor(Math.random() * 721) - 360;
}

// Function to pick a random image from the array
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
}

// Loop through each element and add event listeners
elementr.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    // Generate random rotation value
    const randomRotation = getRandomRotation();

    // Apply random rotation using rotate3d
    element.style.transform = `scale(2.5) rotate3d(${Math.random()}, ${Math.random()}, 0, ${randomRotation}deg)`;

    // Pick a random background image
    const randomImage = getRandomImage();
    element.style.backgroundImage = `url(${randomImage})`;
  });

  // Optionally, reset styles on mouse leave
  element.addEventListener("mouseleave", () => {
    element.style.transform = "rotate3d(0, 0, 0, 0deg)";
    element.style.backgroundImage = ""; // Default image
  });
});

//doing something

// code for scroll effect in card

function shiftCards() {
  const cards = document.querySelectorAll(".card"); // Always fetch the cards dynamically
  const lastCard = cards[cards.length - 1];
  const container = document.querySelector(".crdcontainer");

  // Move the last card to the first position after the transition completes
  setTimeout(() => {
    container.insertBefore(lastCard, cards[0]);
    updateCardPositions(true); // Skip animation during DOM reordering
  }, 500); // Match the transition duration
}
let def = 0;
let arr = [
  `<section>
                <H1 data-aos="fade-up-left" >Room Finder</H1>
                <p data-aos="fade-up-left" data-aos-delay="100">An <b>cross platform</b> app for Finding Rooms <br>Best use of network and <b>backend</b>
                    integrations.
                </p>
            </section>

            <section>
                <H1 data-aos="fade-up-right"><span class="emf">600K</span> Visitors Reached</H1>
                <p data-aos="fade-up-right" data-aos-delay="100"><b>SEO</b> and Optimized room stores<br>Client and <b>Customer</b> support system and managed
                    navigations<br><a href="https://greenbook1.github.io/" target="_blank">View More</a>
                </p>
            </section>`,
  `<section>
                <H1 data-aos="fade-up-left" >Blood Bank App</H1>
                <p data-aos="fade-up-left" data-aos-delay="100">An <b>App cum Website</b> for listing and searching blood donors.<br>API integration of hopital data and <b>location</b> features
                    integrations.
                </p>
            </section>

            <section>
                <H1 data-aos="fade-up-right"><span class="emf">Real</span> World Usecase</H1>
                <p data-aos="fade-up-right" data-aos-delay="100"><b>Android</b> and web integration for users location.<br>support system and managed
                    navigations<br><a href="" target="_blank">View More</a>
                </p>
            </section>`,
  `<section>
                <H1 data-aos="fade-up-left" >Educational Platform</H1>
                <p data-aos="fade-up-left" data-aos-delay="100">An <b>cross platform</b> app for Finding Rooms <br>Best use of network and <b>backend</b>
                    integrations.
                </p>
            </section>

            <section>
                <H1 data-aos="fade-up-right"><span class="emf">Student   </span>&nbsp&nbsp&nbspenovation</H1>
                <p data-aos="fade-up-right" data-aos-delay="100"><b>Simple</b> and Optimized platform for theory and practice of<br>concepts<b> Quiz</b> Automated system and Ranking.
                   <br><a href="https://greenbook1.github.io/Vedalika.io/" target="_blank">View More</a>
                </p>
            </section>`,
];

function updateCardPositions(skipAnimation = false) {
  const cards = document.querySelectorAll(".card");

  let rms = document.getElementById("rms");
  rms.innerHTML = arr[def];
  def++;
  console.log(def);
  if (def > 2) {
    def = 0;
  }
  console.log(def);

  cards.forEach((card, index) => {
    if (skipAnimation) {
      // Temporarily disable transition for smooth DOM reordering
      card.style.transition = "none";
    } else {
      // Restore transition after reordering
      card.style.transition =
        "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";
    }

    if (index === 0) {
      document.getElementsByClassName('overlay')[0].style.opacity = .6;
      card.style.transform = "translateX(-15px) rotateY(-15deg)";
    } else if (index === 1) {
      document.getElementsByClassName('overlay')[1].style.opacity = 1;
      card.style.transform = "translateX(0) rotateY(0)";
    } else if (index === 2) {
      document.getElementsByClassName('overlay')[2].style.opacity = .6;
      card.style.transform = "translateX(15px) rotateY(15deg)";
    }
  });

  if (skipAnimation) {
    // Re-enable transition after DOM reordering
    setTimeout(() => {
      cards.forEach((card) => {
        card.style.transition =
          "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease";
      });
    });
  }
}

// Add event listener to the container to trigger shifting on click
document.querySelector(".crdcontainer").addEventListener("click", () => {
  shiftCards();
});

// Initial position setup
updateCardPositions();

// ease out scrolling

function cngf(index) {
  let rts = [
    `<h1>Website Design</h1>
                <p><b>Modern</b> and Stunning <b>Website</b> Designs with ease and Responce. Your <b>Business</b> need
                    important <b>Growth</b> and focus</p>
                <video src="animations/vd2.mp4" autoplay loop></video>`,
    `<h1>App Development</h1>
                <p>Create <b>Seamless</b> and <b>Inovative</b> Mobile Apps with advanced features and smooth performance. Your Business deserves <b>high-impact</b> solutions and scalability.</p>
                <video src="animations/vd2.mp4" autoplay loop></video>`,
    `<h1>IT Consultancy</h1>
                <p>Expert IT Consultancy to drive digital <b>Transformation</b> and optimize your business operations. Helping you achieve <b>effeciency</b>, innovation, and strategic <b>growth</b>.</p>
                <video src="animations/vd2.mp4" autoplay loop></video>`,
  ];
  document.getElementById("rt7").innerHTML = rts[index];
}
