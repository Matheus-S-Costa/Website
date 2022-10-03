class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log();
            link.style.animation
            ? (link.style.animation = '')
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

$(function() {
  
    // Set the command-line prompt to include the user's IP Address
    //$('.prompt').html('[' + codehelper_ip["IP"] + '@HTML5] # ');
      $('.prompt').html('[user@HTML5] # ');
  
    // Initialize a new terminal object
    var term = new Terminal('#input-line .cmdline', '#container output');
    term.init();
    
    // Update the clock every second
    setInterval(function() {
      function r(cls, deg) {
        $('.' + cls).attr('transform', 'rotate('+ deg +' 50 50)')
      }
      var d = new Date()
      r("sec", 6*d.getSeconds())  
      r("min", 6*d.getMinutes())
      r("hour", 30*(d.getHours()%12) + d.getMinutes()/2)
    }, 1000);
    
  });