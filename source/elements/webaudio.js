import html from '../templates/webaudio.js';

const { Component, template, define } = quantum;

export class WebAudio extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-webaudio', WebAudio);