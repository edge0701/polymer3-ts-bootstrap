import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';

import { customElement, property } from '../decorators/polymer';

@customElement('dd-app')
class DDApp extends PolymerElement {

  static get template() {
      return html`lol`;
  }

  static ready() {
    console.log('ready');
  }
}