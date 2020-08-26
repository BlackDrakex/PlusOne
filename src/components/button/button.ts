import './button.scss';

export class Button {
  private _node: HTMLButtonElement;

  constructor(node: HTMLButtonElement) {
    this._node = node;
  }

  onPress(callback: () => void): void {
    this._node.addEventListener('click', callback);
  }

  setButtonText(text: string): void {
    this._node.textContent = text;
  }
}
