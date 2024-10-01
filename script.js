const client_images = document.querySelector('.client-image');



const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png'];


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let i = 0;

prev.addEventListener('click', () => {
    if (i === 0) {
        i = images.length;
    }
    i--;
    return setImg();
}); 

next.addEventListener('click', () => {
  if (i === images.length - 1) {
    i = -1;
  }
  i++;
  return setImg();
});

function setImg() {
  return client_images.setAttribute('src', `./assets/clients-images/${images[i]}`);
}

// testimonials
const testimonials_image = document.querySelector('.testimonials-img');



const testimonials = [
  {
    img: 't1.jpg',
    h1: 'HOD CSE-Adhiyamaan College of Engineering, Hosur',
    p:'We really thank you for your service rendered to the final year students of CSE department by conducting a workshop on Web Development Technologies.'
  },
  {
    img: 't2.jpg',
    h1: 'HOD ECE-R.M.K Engineering College, Chennai',
    p:'We really thank you for your service rendered to the second year students of ECE department by conducting a hands on training on ARDUINO.'
  },
  {
    img: 't3.jpg',
    h1: 'HOD ECE-Ramco Institute of Technology, Rajapalayam',
    p:'It gives us immense pleasure and thank you for conducting ARDUINO course in our institution.'
  },
  {
    img: 't4.jpg',
    h1: 'C.Dhaya-HOD CSE-Adhiparasakthi Engineering College,Melmaruvathur',
    p:'We really thank you for your service rendered to the students of CSE department by conducting a hands on training on ANDROID.'
  },
  {
    img: 't5.jpg',
    h1: 'Dr.S.R.Srlkumar Principal-Kalasalingam Institute of Technology,Virudhunagar',
    p:'It gives us immense pleasure and thank you for conducting ANDROID workshop in our institution.'
  },
  {
    img: 't6.jpg',
    h1: 'Dr.C.Jegadheesan Principal-Arulmigu Meenakshi Amman College of Engineering, Thiruvannamalai',
    p:'We sincerely thank the company for free Placement Training to our students in our institution.'
  },
  {
    img: 't7.png',
    h1: 'Dr.S.Rajasekhar Principal-Jairams Arts and Science College, Karur',
    p:'We really thank you for your service rendered to the students of this institution by conducting hands on ROBOTICS Workshop.'
  },
  {
    img: 't8.jpg',
    h1: 'Dr.A.Rajesh HOD-C.Abdul Hakeem College of Engineering & Technology, Vellore',
    p:'It gives me an immense pleasure to appreciate and thank you for the services rendered to the students of Computer Science Department in our institution.'
  },
  {
    img: 't9.png',
    h1: 'Principal-Gojan School of Business and Technology,Chennai',
    p:'It is our immense pleasure to thank you for the services rendered to the faculties by conducting "Faculty Development Programme on ANDROID APPLICATION DEVELOPMENT IN CLOUD"'
  },
  {
    img: 'te10.jpg',
    h1: 'Dr.G.Baskar Principal-Bharathidasan Engineering College, Vellore',
    p:'We really thank you for your service rendered to the students of this institution by conducting hands on Internet of Things Workshop.'
  },
  {
    img: 't10.jpg',
    h1: 'Dr.R.Meganathan Principal-Mohamed Sathak College of Arts & Science,Sholinganallur',
    p:'we really thank with "Oneyes technologies" on training at the workshop on "Python applications and its Development".'
  },
  {
    img: 't11.jpg',
    h1: 'Dr.J.Arputha Vijaya Selvi Dean(R&D)-Kings College of Engineering, Pudukkottai',
    p:'We express our sincere thanks for your visit to our campus for presenting the workshop on "Android Sytems".'
  },
  {
    img: 't12.jpg',
    h1: 'Dr.P.Natarajan Principal-Priyadharshini Engineering College, Vellore',
    p:'We really thank you for your service rendered to the students of this institution by conducting National Level One Day Workshop on "National security and Information Privacy against Ethical Hacking".'
  },
  {
    img: 't13.jpg',
    h1: 'Dr.Periyasamy Dean-PGP College of Engineering and Technology,Namakkal',
    p:'It gives us immense pleasure to appreciate and thank you for your service rendered to the final year students of our information.'
  },
  {
    img: 't14.gif',
    h1: 'Dr.A.V.Ram Prasad Principal-K.L.N. College of Engineering, Sivagangai',
    p:'It gives immense pleasure to thank you for your services rendered to the EEE Department students of this institution for the conduct of orientation programme on placement training.'
  },
  {
    img: 't15.png',
    h1: 'Mr.M.Krishnan Faculty Advisor-K.S.Rangasamy College of Technology,Thiruchengode',
    p:'It is our pleasure to thank you for the services rendered to the students of this institution by conducting a training program on "ANDROID APPLICATION DEVELOPMENT',
  },
  {
    img: 't16.png',
    h1: 'Dr.S.Chitra Principal-Er. Perumal Manimekalai College of Engineering, Hosur',
    p:'We really thank you for conducting the WORKSHOP on "ARDUINO PROGRAMMING".'
  },
  {
    img: 't17.png',
    h1: 'Dr.J.Venu Gopal Krishnan HOD-Dept.of ECE-Jeppiaar Engineering College,Chennai',
    p:'We really thank you for your service rendered to the students of this institution by conducting a Web Development and Embedded System Workshop.'
  },
  {
    img: 't18.png',
    h1: 'Dr.P.Thangaraj HOD-Dept.of CSE-Bannari Amman Institute of Technology, Sathyamangalam',
    p:'It gives us immense pleasure to appreciate and thank you for your service rendered to the students of Computer Science and Engineering in our institution.'
  },
];

let j = 0;
const h1 = document.createElement('h1');
const p = document.createElement('p');

const manual_btn = document.querySelectorAll('.manual-btn');


function showSlide(value)
{
  j = value;
  testimonials_image.setAttribute('src', `./assets/Testimonial-image/${testimonials[value-1].img}`);
  h1.textContent = testimonials[value - 1].h1;
  p.textContent = testimonials[value - 1].p;
  document.querySelector('.slides-content').appendChild(h1);
  document.querySelector('.slides-content').appendChild(p);
}
showSlide(1);
let previous = manual_btn[0];
previous.classList.add('active');

setInterval(() => {
  if (j === testimonials.length-1) {
    j = 0;
  }
  let store = manual_btn[j];
  previous.classList.remove('active');

  store.classList.add('active');

  j++;
  previous = store;
  return showSlide(j);
  
}, 2000);


