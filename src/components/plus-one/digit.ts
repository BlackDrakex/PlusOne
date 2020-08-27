class Digit {
  private _parentNode: HTMLElement;
  private _node: HTMLInputElement;

  constructor(parentNode: HTMLElement) {
    this._parentNode = parentNode;
  }

  render() {
    const classes = ['plus-one__digit', 'js-plus-one__digit'];

    this._node = document.createElement('input');
    this._node.classList.add(...classes);

    this._parentNode.appendChild(this._node);
  }
}
