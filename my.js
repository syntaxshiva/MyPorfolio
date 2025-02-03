let nav = document.querySelector(".navbar"); // Select your navbar
let timeout; // Variable to track inactivity

let redes = [
    'https://akshayyadav9528.github.io/restaurant-website/',
    'https://greenbook1.github.io/',
    '',
    'https://greenbook1.github.io/',
    
    'https://www.instagram.com/its_deligh/',
];

function redirect(index){
    window.open(redes[index])
}

// Function to hide navbar
function hideNavbar() {
    nav.style.opacity = "0"; // Make navbar invisible
    nav.style.transition = "opacity 0.5s ease"; // Smooth transition
}

// Function to show navbar
function showNavbar() {
    nav.style.opacity = "1"; // Make navbar visible
    clearTimeout(timeout); // Reset the timeout
    timeout = setTimeout(hideNavbar, 3000); // Hide after 4 seconds of inactivity
}

// Detect user scroll
window.addEventListener("scroll", showNavbar);

// Initial timeout to hide navbar after 4 seconds if no movement
timeout = setTimeout(hideNavbar, 3000);

let o1 = document.getElementsByClassName('o1');
let urls = [
    'images/site.png',
    'images/room.png',
    'images/save.png',
    'images/saver.png',
    'images/wer.jpg'
];
let headings = [
    'Online <i>Store</i> Site <img onclick="redirect(0)" src="images/chain.png" alt="">',
    'Room <i>Finding</i> App <img onclick="redirect(1)" src="images/chain.png" alt="">',
    'Business <i>Statistics</i> Tools <img onclick="redirect(2)" src="images/chain.png" alt="">',
    'Room <i>Finding</i> App <img onclick="redirect(3)" src="images/chain.png" alt="">',
    'Travel <i>Tourism</i> Portal <img onclick="redirect(4)" src="images/chain.png" alt="">',
];
let subheadings = [
    'HTML - JavaScript - CSS - NodeJs',
    'Flutter - AppWrite - NodeJS - Dart',
    'NodeJS - JavaScript - React',
    'NodeJS - FireBase - AppWrite',
    'Figma - CSS3 - HTML'
];
let para = [
    'An online web store is a platform that allows businesses to showcase and sell products or services digitally. It provides users with a seamless shopping experience, enabling them to browse categories, compare products, and make secure purchases. Advanced features like personalized recommendations, real-time inventory updates, and multiple payment options enhance user convenience.',
    'The Room Finding App is a platform designed to help users easily search for and rent rooms, shared accommodations, or properties based on their preferences. It offers advanced filtering options like location, price range, amenities, and room type. <br>It also provides recommendations based on user preferences and real-time availability.',
    'DevOps is a set of practices that combines software development and IT operations to streamline workflows and enhance deployment efficiency. It focuses on automation, continuous integration, and monitoring to ensure faster and more reliable software releases. By bridging the gap between development and operations teams, DevOps improves scalability, security, and system stability.',
    'Backend development focuses on building the server-side logic, database management, and APIs that power web applications. It ensures seamless data processing, security, and efficient communication between the frontend and the database. Scalable backend architectures support high-performance applications, enabling real-time updates, authentication, and business logic execution.',
    'UI/UX design is the process of creating visually appealing and user-friendly interfaces that enhance the overall user experience. It involves understanding user behavior, optimizing navigation, and designing interactive elements to ensure intuitive usability. A well-crafted UI/UX design improves engagement, accessibility, and satisfaction, leading to higher user retention.',

];

document.querySelectorAll('.overlay section h1')[0].style.opacity = 1;
    o1[0].style.opacity = .8;
    o1[0].style.background ='black';
let selectedo1 = 0;
function oclick(index){
    document.querySelectorAll('.overlay section h1')[selectedo1].style.opacity = 0;
    o1[selectedo1].style.opacity = 0;
    o1[selectedo1].style.background ='';
    document.querySelectorAll('.overlay section h1')[index].style.opacity = 1;
    o1[index].style.opacity = .8;
    o1[index].style.background ='black';
    selectedo1 = index;
    // changin content and image
    document.querySelector('.projectimage').style.backgroundImage = `url(${urls[index]})`;
    document.querySelector('.third-page h1.aos-init.aos-animate').innerHTML = headings[index];
    document.querySelector('.third-page h4').innerHTML = subheadings[index];
    document.querySelector('.third-page p').innerHTML = para[index];
}

function chatclick(){
    window.open("https://wa.me/917706989915?text='Hello, I want to chat with you!', _blank")
}

var cards = [
    `<video src="images/web.mp4" autoplay muted loop ></video>
            <div class="card-container" data-aos="fade-right">
                <h1 data-aos="fade-right" data-aos-delay="500">Website Designs</h1>
                <h3 data-aos="fade-right" data-aos-delay="600">Business and Portfolio and Web stores</h3>
                <p data-aos="fade-right" data-aos-delay="700">Creative website can make you custumers stay and focus on what is important.UI/UX of a website make
                    it visited more often and we are good at that.</p>
                    <div class="feedback">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Button onclick="chatclick()">Lets Chat</Button>
                    </div>
            </div>`,
            `<video src="images/web.mp4" autoplay muted loop ></video>
            <div class="card-container" data-aos="fade-right">
                <h1 data-aos="fade-right" data-aos-delay="500">App Development</h1>
                <h3 data-aos="fade-right" data-aos-delay="600">Apps like Uber and Zomato or Custom apps</h3>
                <p data-aos="fade-right" data-aos-delay="700">Creative website can make you custumers stay and focus on what is important.UI/UX of a website make
                    it visited more often and we are good at that.</p>
                    <div class="feedback">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Button onclick="chatclick()">Lets Chat</Button>
                    </div>
            </div>`,
            `<video src="images/web.mp4" autoplay muted loop ></video>
            <div class="card-container" data-aos="fade-right">
                <h1 data-aos="fade-right" data-aos-delay="500">Marketing</h1>
                <h3 data-aos="fade-right" data-aos-delay="600">Social media and Network Marketing</h3>
                <p data-aos="fade-right" data-aos-delay="700">Creative website can make you custumers stay and focus on what is important.UI/UX of a website make
                    it visited more often and we are good at that.</p>
                    <div class="feedback">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Button onclick="chatclick()">Lets Chat</Button>
                    </div>
            </div>`,
            `<video src="images/web.mp4" autoplay muted loop ></video>
            <div class="card-container" data-aos="fade-right">
                <h1 data-aos="fade-right" data-aos-delay="500">IT Counsultancy</h1>
                <h3 data-aos="fade-right" data-aos-delay="600">Your Problem need Best solutions</h3>
                <p data-aos="fade-right" data-aos-delay="700">Creative website can make you custumers stay and focus on what is important.UI/UX of a website make
                    it visited more often and we are good at that.</p>
                    <div class="feedback">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Button onclick="chatclick()">Lets Chat</Button>
                    </div>
            </div>`
];
let rt = document.querySelectorAll('.card-buttons span');
// rt.forEach((span) => {
//     // Add mouseenter event listener
//     span.addEventListener('mouseenter', () => {
//         // Apply hover styles
//         span.style.position = 'relative';
//         span.style.top = '-10px';
//         span.style.backgroundColor = 'grey';
//         span.style.transform = 'scale(1.2)';
//     });

//     // Add mouseleave event listener
//     span.addEventListener('mouseleave', () => {
//         // Revert to original styles
//         span.style.position = '';
//         span.style.top = '';
//         span.style.backgroundColor = '#a64d79';
//         span.style.transform = '';
//     });
// });
rt[0].style.position = 'relative';
rt[0].style.top = '-10px';
rt[0].style.backgroundColor = 'grey';
rt[0].style.transform = 'scale(1.2)';
let selectedbutton =0;
function onbuttonclick(index){

rt[selectedbutton].style.position = '';
rt[selectedbutton].style.top = '';
rt[selectedbutton].style.backgroundColor = '#a64d79';
rt[selectedbutton].style.transform = '';

rt[index].style.position = 'relative';
rt[index].style.top = '-10px';
rt[index].style.backgroundColor = 'grey';
rt[index].style.transform = 'scale(1.2)';
selectedbutton = index;
var docs = document.getElementById('cardY');
docs.innerHTML = cards[index];



}