import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cb-button',
  styleUrl: 'cb-button.scss',
  shadow: true,
})
export class CbButton {
  @Prop() type: ButtonType;
  @Prop() prefixIcon: string;
  @Prop() suffixIcon: string;

  private getButtonClass(): string {
    switch (this.type) {
      case ButtonType.Flat:
        return 'flat';
      case ButtonType.Outline:
        return 'outline';
      case ButtonType.Filled:
      default:
        return 'filled';
    }
  }

  render() {
    return (
      <button class={this.getButtonClass()}>
        <slot></slot>
      </button>
    );
  }
}

/*
 * Button can be filled, flat or outline style
 * Button can have text with or without an icon
 *   The icon can be on the left or right side of the text
 * Button can be split (left part contains default action with text, right part is just an arrow down icon which opens a submenu)
 *   The split button dropdown contains a list of actions in the shape of further buttons
 * Button can be a group button (i. e. two or more buttons aligned directly next to each other)
 * Button can be a toggle button (i. e. a button that can be toggled on and off)
 *
 * Button can contain only an icon, in which case the button is round
 * Icon Button will be a seperate component
 */

export enum ButtonType {
  Filled,
  Flat,
  Outline,
}
