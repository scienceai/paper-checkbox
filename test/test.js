import assert from 'assert';
import { jsdom } from 'jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

import PaperCheckbox from '../src/paper-checkbox';

describe('PaperCheckbox', () => {

  before(() => {
    global.document = jsdom('<!doctype html><html><body></body></html>');
    global.window = global.document.defaultView;
  });

  describe('html output', () => {

    it('renders a div with className "paper-checkbox"', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox onClick={() => {}} />);
      let result = shallowRenderer.getRenderOutput();
      assert.equal(result.type, 'div');
      assert(result.props.className.match(/paper\-checkbox/));
    });

    it('renders a single child (a checkbox) when no children are passed', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox onClick={() => {}} />);
      let result = shallowRenderer.getRenderOutput();
      assert(result.props.children && !Array.isArray(result.props.children));
    });

    it('renders two children (a checkbox and a label) when children are passed', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox onClick={() => {}} children='click the checkbox' />);
      let result = shallowRenderer.getRenderOutput();
      assert(Array.isArray(result.props.children));
      assert(result.props.children.length === 2);
    });

  });

  describe('props', () => {

    it('adds the "disabled" class to the parent div when disabled', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox onClick={() => {}} disabled={true} />);
      let result = shallowRenderer.getRenderOutput();
      assert(result.props.className.match(/disabled/));
    });

    it('adds the "checked" class to the checkbox div when checked', () => {
      let instance = TestUtils.renderIntoDocument(<PaperCheckbox onClick={() => {}} checked={true} />);
      let checkbox = TestUtils.findRenderedDOMComponentWithClass(instance, 'checkbox');
      assert(checkbox.className.match(/checkbox/));
      assert(checkbox.className.match(/checked/));
    });

    it('renders children as a label', () => {
      let instance = TestUtils.renderIntoDocument(<PaperCheckbox onClick={() => {}}>test label</PaperCheckbox>);
      let checkbox = TestUtils.findRenderedDOMComponentWithClass(instance, 'checkbox');
      let label = TestUtils.findRenderedDOMComponentWithClass(instance, 'checkbox-label');
      assert.equal(label.textContent, 'test label');
    });

  });

  describe('behavior', () => {
    let Container = class extends React.Component {
      constructor(props, context) {
        super(props, context);
        this.state = { checked: false };
      }

      render() {
        return (
          <div>
            <PaperCheckbox
              checked={this.state.checked}
              onClick={() => this.setState({ checked: !this.state.checked })}
            />
          </div>
        );
      }
    };

    it('calls an onClick callback when clicked', () => {
      let instance = TestUtils.renderIntoDocument(<Container />);
      let container = TestUtils.findRenderedComponentWithType(instance, Container);
      let reactCheckbox = TestUtils.findRenderedComponentWithType(instance, PaperCheckbox);
      let domCheckbox = TestUtils.findRenderedDOMComponentWithClass(instance, 'checkbox');

      assert.equal(reactCheckbox.props.checked, false);

			TestUtils.Simulate.click(domCheckbox);
      assert.equal(reactCheckbox.props.checked, true);

			TestUtils.Simulate.click(domCheckbox);
      assert.equal(reactCheckbox.props.checked, false);
    });

  });

});
