import { Quantum, define } from '../../references/quantum.js';
import { webaudio } from '../templates/webaudio.js';

export class WebAudio extends Quantum {
    constructor() {
        super(webaudio);
    }
}

define(WebAudio);