import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class LogoCard2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static get styles(){
    return css`
    :host {
      .mainCard {
        text-align: center;
        border: 2px solid rgb(0, 0, 0);
        padding: 8px 8px 32px 32px;
        width: 500px;
        height: 500px;
        background-color: navajowhite;
      }
      button {
        color: blue;
        padding: px 8px 8px 8px 8px;
        display: block;
        margin: auto
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
        padding: 8px 8px 32px 10px;
        width: 100px;
        
      }
      .heading{
        margin: 50px;
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
    }
  
  `};

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="mainCard">
        <h1 class="heading"> Penn State University </h1>
        <meme-maker alt="Penn State Logo" image-url="https://images.onwardstate.com/uploads/2014/02/NittanyLionLogo.jpg" width="300" top-text="We Are" bottom-text="Penn State" class="image"></meme-maker>
        <h2>Description</h2>
        <p>The Penn State University logo showing the Nittany Lion. </p>
        <button> <a href="https://hax.psu.edu"> Details
        </a> </button> 
      </div>
    `;
  }
}


customElements.define('logo-card2', LogoCard2);