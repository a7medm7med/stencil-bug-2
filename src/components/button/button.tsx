import { Component, h } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrl: 'button.styles.scss',
  shadow: true,
})
export class Button {
  render() {
    return <button class="button">Button Text</button>;
  }
}
