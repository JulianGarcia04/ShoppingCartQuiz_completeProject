class navBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }   

    getTemplate(){
        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /*html */ `
            <nav>
                <div>
                    
                </div>
            </nav>
        `
    }
}

customElements.define('nav-bar', navBar);