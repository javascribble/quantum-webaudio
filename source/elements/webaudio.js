import { Component, template } from '../../references/quantum.js';
import html from '../templates/webaudio.js';

export class WebAudio extends Components {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-webaudio', WebAudio);