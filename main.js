// Initialize AOS animations
        document.addEventListener('DOMContentLoaded', () => {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });

const text = document.getElementById("name").textContent;
  document.getElementById("name").innerHTML = text.split('').map(char => 
    `<span style="color: ${getRandomColor()}">${char}</span>`
  ).join('');
  
  function getRandomColor() {
    const colors = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#ffd60a', 'cyan'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
            
            // Initialize particles.js
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 200
                        }
                    },
                    "color": {
                        "value": ["#9b5de5", "#f15bb5", "#ff0000", "#00ff00", "#0000ff"]
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color":  "#ffffff",
                        },
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 100,
                        "color": "#0066cc",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });

            // Initialize skill progress bars
            const skillBars = document.querySelectorAll('.skill-progress-bar');
            setTimeout(() => {
                skillBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    bar.style.width = percent;
                });
            }, 1000);
            
            // Theme Toggle Functionality
            const themeToggle = document.getElementById('theme-toggle');
            const body = document.body;
            
            // Check for saved theme preference
            if (localStorage.getItem('theme') === 'dark') {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
                themeToggle.classList.add('dark');
            }
            
            themeToggle.addEventListener('click', () => {
                body.classList.toggle('light-mode');
                body.classList.toggle('dark-mode');
                themeToggle.classList.toggle('dark');
                
                // Save preference
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            });
            
            // Navigation handling
            const navbar = document.getElementById('navbar');
            const navLinks = document.querySelectorAll('.nav-link');
            const MenuBmobiletn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Highlight active section in navigation
                const scrollPosition = window.scrollY + 100;
                
                document.querySelectorAll('section').forEach(section => {
                    if (section.offsetTop <= scrollPosition && 
                        section.offsetTop + section.offsetHeight > scrollPosition) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            });
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                });
            });
            
            // Portfolio filtering
            const portfolioFilters = document.querySelectorAll('.portfolio-filter');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            portfolioFilters.forEach(filter => {
                filter.addEventListener('click', () => {
                    // Remove active class from all filters
                    portfolioFilters.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked filter
                    filter.classList.add('active');
                    
                    const filterValue = filter.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Contact form handling
            const contactForm = document.getElementById('contact-form');
            
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const service = document.getElementById('service').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the form data to a server
                // For demo purposes, we'll just show a success message
                const formElements = contactForm.elements;
                for (let i = 0; i < formElements.length; i++) {
                    formElements[i].disabled = true;
                }
                
                // Replace form with success message
                contactForm.innerHTML = `
                    <div class="text-center py-10">
                        <div class="text-green-500 text-5xl mb-4">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p class="mb-6">Thank you for reaching out, ${name}. I'll get back to you soon.</p>
                        <button type="button" class="btn-primary" id="reset-form">Send Another Message</button>
                    </div>
                `;
                
                // Add event listener to reset form button
                document.getElementById('reset-form').addEventListener('click', () => {
                    location.reload();
                });
            });
            
            // // CV Download Handler
            // document.getElementById('download-cv').addEventListener('click', function(e) {
            //     e.preventDefault();
                
            //     // Create a div to show loading and then success
            //     const downloadDiv = document.createElement('div');
            //     downloadDiv.className = 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50';
            //     downloadDiv.innerHTML = `
            //         <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full text-center">
            //             <div class="flex justify-center mb-4">
            //                 <div class="progress-loading"></div>
            //             </div>
            //             <h3 class="text-xl font-bold mb-2">Preparing Download</h3>
            //             <p>Please wait while we prepare your file...</p>
            //         </div>
            //     `;
                
            //     document.body.appendChild(downloadDiv);
            // });



             
                // // Simulate download delay
                // setTimeout(() => {
                //     downloadDiv.innerHTML = `
                //         <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full text-center">
                //             <div class="text-green-500 text-5xl mb-4">
                //                 <i class="fas fa-check-circle"></i>
                //             </div>
                //             <h3 class="text-xl font-bold mb-2">Download Complete!</h3>
                //             <p class="mb-6">Your resume has been downloaded successfully.</p>
                //             <button type="button" class="btn-primary" id="close-download">Close</button>
                //         </div>
                //     `;
                    
                //     document.getElementById('close-download').addEventListener('click', () => {
                //         document.body.removeChild(downloadDiv);
                //     });
                        // }, 2000);
                        
}); // <-- Add this closing brace to end the DOMContentLoaded event listener
                
// A mapping of email IDs to their obfuscated parts and specific subjects
const emails = {
    // philipmuhuri@gmail.com
    "philip": {
        user: "philipmuhuri",
        domain: "gmail",
        tld: "com",
        subject: 
        "Hello! Let's Perfect Your Resume - Professional CV Writing Ready. OR, Do you Need a Stunning Portfolio Website? Expert Development Services Here. Work with Me and Boost Your Reach with Expert SEO & Content Writing. When's Your Deadline?"
    },
    // jane.doe@example.com
    "jane": {
        user: "jane" + String.fromCharCode(46) + "doe",
        domain: "example",
        tld: "com",
        subject: "Website Design Consultation" // Specific subject for Jane
    },
    // info@support.com
    "support": {
        user: "info",
        domain: "support",
        tld: "com",
        subject: "Technical Support Request" // Specific subject for Support
    }
};

// ASCII codes for '@' and '.'
const atSymbol = String.fromCharCode(64); // @
const dotSymbol = String.fromCharCode(46); // .

// Get all elements with the class 'email-obfuscator'
const emailElements = document.querySelectorAll('.email-obfuscator');

// Iterate through each email element and set up the display and click handler
emailElements.forEach(element => {
    // 1. Get the email ID from the data attribute
    const emailId = element.getAttribute('data-email-id');
    const emailData = emails[emailId];

    if (emailData) {
        // 2. Construct the full email address
        const fullEmail = emailData.user + atSymbol + emailData.domain + dotSymbol + emailData.tld;
        
        // // 3. Display the email in the HTML element
        // element.textContent = fullEmail;

        // 4. Add the click event handler to the element
        element.style.cursor = 'pointer'; 
        
        element.onclick = function() {
            // Retrieve the specific subject for this email and encode it
            const specificSubject = emailData.subject;
            const encodedSubject = encodeURIComponent(specificSubject);

            // Construct the mailto link using the specific subject
            const mailtoLink = "mailto:" + fullEmail + "?subject=" + encodedSubject;
            
            // Open the email client
            window.location.href = mailtoLink;
        };
    }
});         

const backToTop = document.getElementById('backToTop');

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
    backToTop.classList.add('show');
  } else {
    header.classList.remove('scrolled');
    backToTop.classList.remove('show');
  }
});

// Back to top button
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});