import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

class LogoCard2 extends LitElement {
  static properties = {
    header: { type: String },
    title: {type: String},
    subTitle: {type: String},
    accentColor: {
    type: String,
    reflect: true,
    attribute: 'accent-color'},
    opened: {type: Boolean, reflect: true},
    memeImage:{type: String},
    memeTopText: {type: String},
    memeBottomText:{type: String},
  }

  static get styles(){
    return css`
    :host([accent-color="blue" ]) .mainCard {
      background-color: var(--logo-card-accent-color, blue);
      color: white; 
    }
    :host([accent-color="gray" ]) .mainCard {
      background-color: var(--logo-card-accent-color, gray);
      color: white; 
    }
    :host([accent-color="red" ]) .mainCard {
      background-color: var(--logo-card-accent-color, red);
      color: white; 
    }
    :host([accent-color="white" ]) .mainCard {
      background-color: var(--logo-card-accent-color, white);
      color: black; 
    }

      .mainCard {
        text-align: center;
        border: 5px solid navy;
        padding: 10px 10px 10px 10px;
        width: 500px;
        height: 650px;
        background-color: white;
        display: flex;
        float: left;
        display: block;
        box-shadow: 0px 0px 5px black;
      }
      .image {
        padding: 10px 10px 10px 10px;
        width: 450px;
        margin: 0px auto;
      }
      .heading{
        margin: 50px;
      }
      meme-maker{
        width: 300px;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        button {
          opacity: 0;
          display: none;
        }
      }
      @media (max-width: 500px) {
        div {
          font-size: 10px;
          image-resolution: auto;
        }
      }
  `};

 
  constructor() {
    super();
    this.header = 'My app';
    this.title = "Pennsylvania State University"
    this.subTitle = "Description"
    this.memeImage = "https://images.onwardstate.com/uploads/2014/02/NittanyLionLogo.jpg"
    this.memeTopText = "We Are"
    this.memeBottomText = "Penn State"
    this.accentColor = null;
    this.opened = false;
  }

  toggleEvent(e){
    var state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    this.opened = state;
  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if(propName === 'opened'){
        this.dispatchEvent(new CustomEvent('opened-changed',
        {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail: {
            value: this[propName]
          } 
        }
        ));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      }
    });
  }
  
  render() {
    return html`
      <div class="mainCard">
        <h1 class="heading">${this.title}</h1>
          <meme-maker alt="Penn State Logo" image-url=${this.memeImage} width="300" top-text=${this.memeTopText} bottom-text=${this.memeBottomText} class="image"></meme-maker>
          <h2 class="subHeading">${this.subTitle}</h2>
          <details .open="${this.opened}" @toggle="${this.toggleEvent}" @click="${this.clickEvent}"> 
            <summary>More Information about Penn State University</summary>
            <slot> </slot></details>   
      </div>
    `;
  }
}


customElements.define('logo-card2', LogoCard2);