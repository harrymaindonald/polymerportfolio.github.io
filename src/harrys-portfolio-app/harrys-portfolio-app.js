import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import '/src/harrys-portfolio-app/page-style.js';
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-input/paper-input.js";
import "../../node_modules/@polymer/paper-input/paper-textarea.js";
/**
 * @customElement
 * @polymer
 */

class HarrysPortfolioApp extends PolymerElement {
  static get template() {
    return html`
      <style include="page-style">
        :host {
          display: block;
          margin: 0;
          padding: 0;
          outline: 0;
          font-size: 100%;       
        }
      </style>
        <nav class="clearfix">
          <paper-button raised on-click="scrollIntoView" id ="main" section-id="main">Harry Maindonald</paper-button>
          <paper-button raised class="botborder" on-click="scrollIntoView" section-id="aboutMe">About Me</paper-button>
          <paper-button raised class="botborder" on-click="scrollIntoView" section-id="work">My Work</paper-button>
          <paper-button raised class="botborder" on-click="scrollIntoView" section-id="contactMe">Contact Me</paper-button>
        </nav>
        <!-- firstview -->
        <div class="main-view" id="main">
        <header>
          <h1>Harry's UX and UI Design</h1>
          <p>Designer of great web pages and mobile applications. I would love to work with you, please send me an <a on-click="scrollIntoView" section-id="contactMe" style="cursor:pointer;">email</a> for more information</p>
        </header>
      </div>

      
      <div class="wrapper">
      
      <!-- secondview -->
        <div class="about-me" id="aboutMe">
          <div class="about-me-text">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit dui sed gravida porta. Proin ut neque a mi facilisis ornare. Nullam porttitor nisi eu nisl elementum interdum dictum non velit. Nullam id viverra est. Sed ornare libero quis molestie tincidunt. Cras orci diam, dictum vitae quam vitae, rhoncus ultrices sem. Pellentesque pretium pretium tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus imperdiet convallis. Praesent nec rutrum dolor, id mollis urna. Nulla tristique aliquam tellus sit amet elementum. Phasellus sed erat libero. Aenean a leo ornare, lobortis arcu at, commodo ex. Vivamus est massa, lacinia non diam ac, ultricies consequat lectus. Donec molestie consequat purus bibendum convallis. Phasellus tempor iaculis lectus eget lacinia.</p>
          </div>
          <div class="about-me-img">
            <img src="./images/mainimg.png" alt="">
          </div>
        </div>
  <!-- third view -->
        <div class="work" id="work">

            <div class="work-text">
                <h2>My Work</h2>
            </div>

            <div class="work-images">
                <div class="work-card">
                    <h4>FlocknSave</h4>

                    <div class="work-image" id="FlocknSave" on-mouseover="handleHover" on-mouseout="normalState">
                        <div id="bkground" class="background"></div>
                        <div  id="content">
                            <p id="div1">Ongoing sdgiproject for a frontend remake of the current FlocknSave website</p>
                            <div class="go-buttons">
                                <paper-button raised class="custom indigo" href="">Website</paper-button>
                                <paper-button raised class="custom indigo">Code</paper-button>
                            </div>
                        </div>    
                    </div>
                    
                
                </div>
                <div class="work-card">
                    <div class="work-image" id="secondWork">

                    </div>
                </div><div class="work-card">
                    <div class="work-image" id="thirdWork">

                    </div>
                </div><div class="work-card">
                    <div class="work-image" id="fourthWork">

                    </div>
                </div>
            </div>

        </div>
  <!-- fourth view -->
        <div class="contact-me" id="contactMe">
          <div class="contact-me-text">
            <h1>Send me a message</h1>
          </div>
          <div class="contact-me-form">
            <paper-input class="form-input" label="Subject"></paper-input> 
            <paper-textarea class="form-input" label="Message"></paper-textarea> 
        
          <paper-button id="sendMessage">Send</paper-button>
        </div></div>

       

        <footer>
          <p>2018 Harry Maindonald</p>
        </footer>

      </div>
    `;
  }

  ready() {
    super.ready();
  }

  handleHover() {
    var infoShow = this.shadowRoot.getElementById("content");
    var backgroundBlur = this.shadowRoot.getElementById("bkground");
    infoShow.style.display = "block";
    backgroundBlur.style.filter = "blur(5px)";
    backgroundBlur.style.webkitFilter = "blur(5px)";
  }

  normalState() {
    var cardHovered = this.shadowRoot.getElementById("content");
    var backgroundBlur = this.shadowRoot.getElementById("bkground");
    cardHovered.style.display = "none";
    backgroundBlur.style.filter = "blur(0px)";
    backgroundBlur.style.webkitFilter = "blur(0px)";
  }

  scrollIntoView(e) {
    let sectionId = e.target.getAttribute('section-id');
    this.$[sectionId].scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  }

}

window.customElements.define('harrys-portfolio-app', HarrysPortfolioApp);