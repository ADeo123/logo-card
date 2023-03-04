import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class LogoCard2 extends LitElement {
  static properties = {
    header: { type: String },
    title: {type: String},
    accentColor: {
    type: String,
    reflect: true,
    attribute: 'accent-color'},
    opened: {type: Boolean, reflect: true},
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
        border: 2px solid rgb(0, 0, 0);
        padding: 8px 8px 32px 32px;
        width: 500px;
        height: 650px;
        background-color: white;
      }
      button {
        color: blue;
        padding: 30px 30px 30px 30px;
        display: block;
        margin: auto;
      }
      .btn:hover {
        background-color: blue; 
        color: white;
      }
      .btn:focus {
        background-color: blue; 
        color: white;
      }
      .image {
        padding: 10px 10px 10px 10px;
        width: 350px;
        border-color: black;
        border-width: 10px;
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
          <meme-maker alt="Penn State Logo" image-url="https://images.onwardstate.com/uploads/2014/02/NittanyLionLogo.jpg" width="300" top-text="We Are" bottom-text="Penn State" class="image"></meme-maker>
          <h2>Description</h2>
          <details .open="${this.opened}" @toggle="${this.toggleEvent}"> 
            <summary>More Information about Penn State University</summary>
            <slot> </slot></details>   
      </div>
    `;
  }
}


customElements.define('logo-card2', LogoCard2);