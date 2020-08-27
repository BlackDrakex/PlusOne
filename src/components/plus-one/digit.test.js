import chai from 'chai';
import jsdom from 'jsdom';
import { Digit } from './digit';

const { expect } = chai;
const { JSDOM } = jsdom;

const dom = new JSDOM('<html><body id="root"></body></html>');
global.window = dom.window;
global.document = dom.window.document;

const requiredClasses = ['plus-one__digit', 'js-plus-one__digit'];

describe('Digit', () => {
  describe('render', () => {
    it('Renders html input element to the DOM', () => {
      const digit = new Digit(document.querySelector('#root'));
      digit.render();

      expect(document.querySelectorAll('input').length).to.equal(1);
    });

    it('Rendered element has required classes', () => {
      const digit = new Digit(document.querySelector('#root'));
      digit.render();

      const node = document.querySelector('input');

      requiredClasses.forEach((className) => expect(node.classList.contains(className)).to.equal(true));
    });
  });
});
