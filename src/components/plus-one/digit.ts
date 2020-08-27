export class Digit {
  private _parentNode: HTMLElement;
  private _node: HTMLInputElement;
  private _correctDigit: number;

  constructor(parentNode: HTMLElement) {
    this._parentNode = parentNode;
    this._node = null;
    this._correctDigit = 0;
  }

  render() {
    if (this._node !== null)
      this._throwError('Element is already rendered. Destroy current instance by calling destroy first.');

    const classes = ['plus-one__digit', 'js-plus-one__digit'];

    this._node = document.createElement('input');
    this._node.classList.add(...classes);

    this._parentNode.appendChild(this._node);
  }

  setCorrectDigit(digit: number) {
    this._correctDigit = digit;
  }

  showCorrectDigit() {
    if (this._node === null) this._throwError("Element wasn't rendered before. Please, call 'render' method first.");

    this._node.value = String(this._correctDigit);
    this._node.readOnly = true;
    this._node.classList.add('plus-one__digit_readonly');
  }

  _throwError(message: string): never {
    throw new Error(message);
  }
}
