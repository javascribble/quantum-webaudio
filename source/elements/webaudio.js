import { Components } from '../../references/quantum.js';

export class WebAudio extends Components {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-webaudio');

    static attributes = [];
}

customElements.define('quantum-webaudio', WebAudio);