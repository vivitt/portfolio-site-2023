const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  --container-width: 45px; 
  display: flex;
  align-items: center;

  --color-background: white;
  --color-control: white;
  --color-label: black;
  --color-border-background: black;

  --color-background-dark: black;
  --color-control-dark: black;
  --color-label-dark: white;
  --color-border-background-dark: white;

  --background-border: 1px solid var(--color-border);
  --background-border-dark: 1px solid var(--color-border-dark);
} 


.switch__background {
  --color: var(--color-background);
  --color-border: var(--color-border-background);
  background-color: var(--color);
  display: block;
  width: var(--container-width);
  height: calc(var(--container-width) / 3);
  border: 1px solid var(--color-border);
  border-radius: 30px;
  position: relative;
  cursor: pointer;   
}   

.switch__control {
  --color: var(--color-control);
  position: absolute;
 border: none;
  --size: calc(var(--container-width) / 2);
  font-size: 30px;
  top: -12px;
  left: -9px;
  transition: left 300ms;
}
.switch__control:after {
content: "🌚";
}

[aria-checked="true"] > .switch__control  {
  top: -12px;
  left: var(--size); 
} 

[aria-checked="true"] > .switch__control:after {
content: "🌞";
}

[aria-checked="true"] {
--color: var(--color-background-dark);
--color-border: var(--color-border-background-dark);
}
.switch__background:focus {
  outline-offset: 8px;
}

@media (max-width: 500px) {
  :host {
      flex-direction: column; 
  }
  .switch__background {
      height: var(--container-width);
      width: calc(var(--container-width)/3);
  } 
  .switch__control {
      left: -9px;
      transition: top 300ms;
  }
  [aria-checked="true"] > .switch__control  {
    left: -9px;
      top: var(--size);
  }

}
</style>
<button role="switch" class="switch__background" id="background">
<span id="control" class="switch__control" role='img' id="control"> 
</span>

</button>
`;

export default class VivittSwitcher extends HTMLElement {
  static is = 'vivitt-switcher';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['disabled', 'checked', 'label'];
  }

  connectedCallback() {
    this.addEventListener('click', () => this.onClick());
    this.checked = this.hasAttribute('checked') || false;
    this.update();
    this.handleDisabled();

    const switchControl = this.shadowRoot.getElementById('control');
    switchControl.setAttribute('aria-label', this.label);
  }

  disconnectedCallback() {
    this.removeEventListener('click');
  }

  handleDisabled() {
    if (this.disabled) {
      this.setAttribute('disabled', true);
    }
  }

  onClick() {
    if (!this.disabled) {
      if (this.hasAttribute('checked')) {
        this.removeAttribute('checked');
      } else {
        this.setAttribute('checked', '');
      }
    }
  }

  update() {
    const event = new CustomEvent('checked-changed', {
      bubbles: true,
      composed: true,
      detail: this.checked,
    });
    this.dispatchEvent(event);
    const switchBackground = this.shadowRoot.getElementById('background');

    if (this.checked) {
      switchBackground.setAttribute('aria-checked', true);
    } else {
      switchBackground.setAttribute('aria-checked', false);
    }
  }

  get checked() {
    return this.hasAttribute('checked');
  }

  set checked(value) {
    this.toggleAttribute('checked', value);
  }

  get label() {
    if (this.hasAttribute('label')) {
      return this.getAttribute('label');
    }
    return '';
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  attributeChangedCallback(name) {
    if (name === 'checked') {
      this.update();
    }
  }
}

customElements.define('vivitt-switcher', VivittSwitcher);
