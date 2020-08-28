export class Digit {
  private _parentNode: HTMLElement;
  private _node: HTMLInputElement;
  private _correctDigit: number;
  private _answer: number;

  constructor(parentNode: HTMLElement) {
    this._parentNode = parentNode;
    this._node = null;
    this._correctDigit = 0;
    this._answer = null;
  }

  render() {
    if (this._node !== null)
      this._throwError('Element is already rendered. Destroy current instance by calling destroy first.');

    const classes = ['plus-one__digit', 'js-plus-one__digit'];

    this._node = document.createElement('input');
    this._node.classList.add(...classes);

    this._node.addEventListener('input', () => {
      this.setAnswer(+this._node.value);
    });

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

  showAnswerField() {
    this._node.value = String(this._answer || '');
    this._node.readOnly = false;
    this._node.classList.remove('plus-one__digit_readonly');
  }

  _throwError(message: string): never {
    throw new Error(message);
  }

  destroy() {
    if (this._node === null) this._throwError("Digit wasn't rendered yet or already have been destroyed.");

    this._node.remove();
    this._node = null;
  }

  isAnswerGiven() {
    return !!this._answer;
  }

  setAnswer(answer: number) {
    this._answer = answer;
  }

  showResult() {
    if (!this._node) return this._throwError("Element isn't rendered!");
    this._node.value = String(this._correctDigit);
    if (this._answer !== this._correctDigit) this._node.classList.add('plus-one__digit_incorrect');
  }
}
