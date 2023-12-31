class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        section {
        --padding: 20px;
        --img-br: 10px;
        max-width: 100%;
        height: 100%;
        padding: var(--padding);
        display: grid;
        place-content: center;
        border-radius: calc(var(--img-br) + var(--padding));
        }

        img {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        border-radius: var(--img-br);
        }

        h2, p {
        color: white;
        }

        h2 {
        font-weight: bold;
        font-size: 21px;
        }

        p {
        font-weight: medium;
        font-size: 16px;
        }
        </style>
        <section data-background>
        <img data-img>
        <h2 data-title></h2>
        <p data-text></p>
        </section>
        `
    }

    static get observedAttributes() {
        return ['imgsrc', 'imgalt', 'title', 'text', 'background']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(newValue === null) {
            this.handleNullAttributes(name)
            return
        } else if(oldValue === newValue) {
            return
        }

        switch(name) {
            case 'imgsrc':
                this.updateImgSrc(newValue)
                break
            case 'imgalt':
                this.updateImgAlt(newValue)
                break
            case 'title':
                this.updateTitle(newValue)
                break
            case 'text':
                this.updateText(newValue)
                break
            case 'background':
                this.updateBackground(newValue)
                break
            default: 
                console.error(`${name} is not a valid attribute`)

        }
    }

    updateImgSrc(newValue) {
        const img = this.shadowRoot.querySelector('[data-img]')
        if(img) {
            img.src = newValue
        }
    }

    updateImgAlt(newValue) {
        const img = this.shadowRoot.querySelector('[data-img]')
        if(img) {
            img.alt = newValue
        }
    }

    updateTitle(newValue) {
        const h2 = this.shadowRoot.querySelector('[data-title]')
        if(h2) {
            h2.textContent = newValue 
        } 
    }

    updateText(newValue) {
        const p = this.shadowRoot.querySelector('[data-text]')
        if(p) {
            p.textContent = newValue
        }
    }

    updateBackground(newValue) {
        const bg = this.shadowRoot.querySelector('[data-background]')
        if(bg) {
            bg.style.backgroundColor = newValue
        }
    }

    handleNullAttributes(name) {
        switch(name) {
            case 'imgsrc':
                const img = this.shadowRoot.querySelector('[data-img]')
                img.remove()
                break
            case 'imgalt': 
                img.alt = 'an image of something very nice'
                break
            case 'title':
                const h2 = this.shadowRoot.querySelector('[data-title]')
                h2.remove()
                break
            case 'text':
                const p = this.shadowRoot.querySelector('[data-text]')
                p.remove()
                break
            case 'background':
                const parent = this.shadowRoot.querySelector('[data-background]');

                while (parent.firstChild) {
                    parent.parentNode.insertBefore(parent.firstChild, parent);
                }

                parent.remove();
                break
            default: 
                console.error(`${name} is not a valid attribute`)

        }
    }
}

customElements.define('card-component', Card);
