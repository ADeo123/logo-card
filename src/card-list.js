import { LitElement, html, css } from 'lit';
import "./logo-card2.js";

export class cardList extends LitElement {
    static get tag() { return 'card-list'; }

    static get properties () {
        return {
            cards: {type: Array},
            cardList: {type: String}
      } 
}

    constructor(){
        super();
        this.cards = [];
        this.cardList = 'Penn State Card List';
        this.updateList();
    }

    //AD
    async updateList(){
        const address = new URL("../api/list.js", import.meta.url).href;
        const response = await fetch(address);
        if (response.ok) {
            const data = await response.json();
            this.cards = data;
        } else {
            console.error(`Failed to fetch card list: ${response.statusText}`);
        }
    }


    static get styles(){
        return css`
        :host{
            display: block; 
        }
        .wrapper{
            border: 2px solid black; 
            display: flex;
        }
        .item{
            display: inline-flex
        }
    `;
    }


    render(){
        return html`
        <h2>${this.cardList}</h2>
        <div class="wrapper">
            <h1>${this.cardList}</h1>
            <div class="item">
                ${this.cards.map((card) => html`
                <logo-card2 image="${card.image}" title="${card.title}" subTitle="${card.subTitle}" memeTopText="${card.memeTopText}" memeBottomText="${card.memeBottomText}"></logo-card2>
                `)}
            </div>
        </div>
        `;
    }
}
customElements.define(cardList.tag, cardList);