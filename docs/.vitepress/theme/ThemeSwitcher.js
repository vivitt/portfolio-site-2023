export default class VivittSwitcher extends HTMLElement {
  constructor() {
    super();
    this.checked = false;
  }

  static get observedAttributes() {
    return ['checked', 'label', 'include-label'];
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

  get includeLabel() {
    return this.hasAttribute('include-label');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });

    shadow.innerHTML = `
                  <button role="switch" class="switch__background" id="background">
                      <span class="switch__control" id="control"> 
                      </span>
  
                  </button>
                  `;

    const switchBackground = shadow.getElementById('background');
    const switchControl = shadow.getElementById('control');

    switchBackground.addEventListener('click', () => {
      if (!this.disabled) {
        this.checked = !this.checked;
      
      }
    });

    if (this.includeLabel) {
      switchBackground.setAttribute('aria-labelledby', this.label);
      const label = document.createElement('span');
      label.setAttribute('id', this.label);
      label.classList.add('switch__label');
      if (this.disabled) {
        label.classList.add('switch__label--disabled');
      }
      if (this.dark) {
        label.classList.add('dark');
      }
      label.innerHTML = this.label;
      shadow.prepend(label);
    } else {
      switchBackground.setAttribute('aria-label', this.label);
    }

    if (this.disabled) {
      this.setAttribute('disabled', true);
      switchBackground.classList.add('switch__background--disabled');
      switchControl.classList.add('switch__control--disabled');
    }

    this.__style = document.createElement('style');

    shadow.appendChild(this.__style);

    this.__style.innerHTML = ` 
  
          :host {
              --container-width: 3rem; 
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

          .switch__label {
              color: var(--color-label);
              font-family: var(--label-font-family);
              font-size: 1.2em;
              padding-inline-end: 0.3em;
          }
  
          .switch__background {
              --color: var(--color-background);
              --color-border: var(--color-border-background);
              background-color: var(--color);
              display: block;
              width: var(--container-width);
              height: calc(var(--container-width) / 3);
              border: 1px solid var(--color-border);
              border-radius: calc(var(--container-width) / 2 );
              position: relative;
              cursor: pointer;   
          }   
      
          .switch__control {
              --color: var(--color-control);
              position: absolute;
             border: none;
              --size: calc(var(--container-width) / 2);
              font-size: 2.2em;
              top: -9px;
              left: -5px;
              transition: left 300ms;
          }
          .switch__control:after {
            content: "🌚";
          }

          .switch__control.checked  {
              left: var(--size); 
              top: -9px;
          } 
          .switch__control.checked:after {
            content: "🌞";
          }
      
          .switch__background.checked {
            --color: var(--color-background-dark);
            --color-border: var(--color-border-background-dark);
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
                  left: -8px;
                  transition: top 300ms;
              }
              .switch__control.checked {
                  left: -8px;
                  top: var(--size);
              }
              .switch__label {
                  padding-inline-end: 0px;
                  padding-bottom: 0.3em;
              }
          }
          `;
  }

  attributeChangedCallback(name) {
    const switchBackground = this.shadowRoot.getElementById('background');
    const switchControl = this.shadowRoot.getElementById('control');
    if (name === 'checked') {
      const event = new CustomEvent('checked-changed', {
        bubbles: true,
        composed: true,
        detail: this.checked,
      });
      this.dispatchEvent(event);
      if (this.checked) {
        switchBackground.setAttribute('aria-checked', true);
        switchBackground.classList.add('checked');
        switchControl.classList.add('checked');
      } else {
        switchBackground.setAttribute('aria-checked', false);
        switchBackground.classList.remove('checked');
        switchControl.classList.remove('checked');
      }
    }
  }
}

customElements.define('vivitt-switcher', VivittSwitcher);
