import html from '../templates/webaudio.js';

export class WebAudio extends quantum.Components {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-webaudio', WebAudio);