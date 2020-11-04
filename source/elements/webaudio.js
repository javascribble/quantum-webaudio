import { Component, template, define } from '../import.js';
import html from '../templates/webaudio.js';

export class WebAudio extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-webaudio', WebAudio);