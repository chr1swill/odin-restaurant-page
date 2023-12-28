class Card extends HTMLElement {
    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.template = document.createElement('template') 
    }

    static get observedAttributes() {
        return ['imgSrc', 'imgAlt', 'title', 'text', 'background']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(newValue === null) {
            this.handleNullAttributes(name)
            return
        } else if(oldValue === newValue) {
            return
        } else if(!isNaN(name)) {
            console.error(`${name} is not a valid attribute`)
        } 

        switch(name) {
            case 'imgSrc':
                this.updateImgSrc(newValue)
                break
            case 'imgAlt':
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

    connectedCallback() {
        this.render();
    }

    updateImgSrc(newValue) {
        const img = this.shadowRoot.querySelector('img')
        if(img) {
            img.src = newValue
        }
    }

    updateImgAlt(newValue) {
        const img = this.shadowRoot.querySelector('img')
        if(img) {
            img.alt = newValue
        }
    }

    updateTitle(newValue) {
        const h2 = this.shadowRoot.querySelector('h2')
        if(h2) {
            h2.textContent = newValue 
        } 
    }

    updateText(newValue) {
        const p = this.shadowRoot.querySelector('p')
        if(p) {
            p.textContent = newValue
        }
    }

    updateBackground(newValue) {
        const bg = this.shadowRoot.querySelector('section')
        if(bg) {
            bg.style.backgroundColor = newValue
        }
    }

    handleNullAttributes(name) {
        switch(name) {
            case 'imgSrc':
                const img = this.shadowRoot.querySelector('img')
                img.remove()
                break
            case 'imgAlt': 
                img.alt = 'an image of something very nice'
                break
            case 'title':
                const h2 = this.shadowRoot.querySelector('h2')
                h2.remove()
                break
            case 'text':
                const p = this.shadowRoot.querySelector('p')
                p.remove()
                break
            case 'background':
                const parent = document.getElementById('section');

                while (parent.firstChild) {
                    parent.parentNode.insertBefore(parent.firstChild, parent);
                }

                parent.remove();
                break
            default: 
                console.error(`${name} is not a valid attribute`)

        }
    }

    render() {
        this.template.innerText = `
            <style>
                section {
                    --padding: 20px;
                    --img-br: 10px;
                    width: 100%;
                    height: 100%;
                    padding: var(--padding);
                    display: grid;
                    place-content: center;
                    border-radius: calc(var(--img-br) + var(--padding);
                }

                img {
                    width: 100%;
                    height: auto;
                    aspect-ratio: 16/9;
                    border-radius: var(--img-br);
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
            <section>
                <img src='' alt=''>
                <h2></h2>
                <p></p>
            </section>
        `
        this.shadowRoot.appendChild(this.template.cloneNode(true))
    }
}

customeElements.define('card-component', Card);
