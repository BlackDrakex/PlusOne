import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { Digit } from './digit';

const dom = new JSDOM('<html><body id="root"></body></html>');
global.document = dom.window.document;

const requiredClasses = ['plus-one__digit', 'js-plus-one__digit'];
const rootNode: HTMLElement = document.querySelector('#root');

let digit: Digit;
beforeEach(() => {
  digit = new Digit(rootNode);
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Digit', () => {
  describe('render', () => {
    it('Renders html input element to the DOM', () => {
      digit.render();

      expect(document.querySelectorAll('input').length).to.equal(1);
    });

    it('Rendered element has required classes', () => {
      digit.render();

      const node = document.querySelector('input');

      requiredClasses.forEach((className) => expect(node.classList.contains(className)).to.equal(true));
    });

    it('Throws and exception if called second time', () => {
      digit.render();

      const func = digit.render.bind(digit);
      expect(func).to.throw('Element is already rendered. Destroy current instance by calling destroy first.');
    });
  });

  describe('showCorrectDigit', () => {
    const correctDigit = 8;

    it('Shows correct digit', () => {
      showDigit();

      const node = document.querySelector('input');
      expect(+node.value).to.equal(correctDigit);
    });

    it('Shown value is readonly', () => {
      showDigit();

      const node = document.querySelector('input');
      expect(node.readOnly).to.equal(true);
    });

    it("Throws an exception if element wasn't rendered before", () => {
      const func = digit.showCorrectDigit.bind(digit);
      expect(func).to.throw("Element wasn't rendered before. Please, call 'render' method first.");
    });

    function showDigit(): void {
      digit.render();

      digit.setCorrectDigit(correctDigit);
      digit.showCorrectDigit();
    }
  });

  describe('destroy', () => {
    it('Removes corresponding element from DOM', () => {
      digit.render();
      digit.destroy();

      expect(document.querySelectorAll('input').length).to.equal(0);
    });

    it("Throws and exception if element is already removed or isn't rendered yet", () => {
      const func = digit.destroy.bind(digit);

      expect(func).to.throw("Digit wasn't rendered yet or already have been destroyed.");
    });
  });

  describe('isAnswerGiven', () => {
    it('Returns true if field is not empty', () => {
      digit.render();
      setValue('10');

      expect(digit.isAnswerGiven()).to.equal(true);
    });

    it('Returns false if field is empty', () => {
      digit.render();

      expect(digit.isAnswerGiven()).to.equal(false);
    });

    it('Returns false if field was cleared', () => {
      digit.render();
      setValue('5');
      setValue('');

      expect(digit.isAnswerGiven()).to.equal(false);
    });

    function setValue(value: string): void {
      const DomEvent = dom.window.Event;
      const inputEvent = new DomEvent('input', { bubbles: true, cancelable: true });
      const changeEvent = new DomEvent('change', { bubbles: true, cancelable: true });

      const node = document.querySelector('input');
      node.value = value;
      node.dispatchEvent(inputEvent);
      node.dispatchEvent(changeEvent);
    }
  });
});
