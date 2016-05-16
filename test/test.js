import assert from 'assert';
import { jsdom } from 'jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import PaperCheckbox from '../src/paper-checkbox';

describe('PaperCheckbox', () => {
  before(() => {
    global.document = jsdom('<!doctype html><html><body></body></html>');
    global.window = global.document.defaultView;
  });

  describe('html output', () => {
    it('renders a div with className "paper-checkbox"', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox />);
      let result = shallowRenderer.getRenderOutput();
      assert.equal(result.type, 'div');
      assert(result.props.className.match(/paper\-checkbox/));
    });

    it('renders a single child (a checkbox) when no children are passed', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox />);
      let result = shallowRenderer.getRenderOutput();
      assert(Array.isArray(result.props.children));
      assert.equal(result.props.children.filter(c => c).length, 1);
    });

    it('renders two children (a checkbox and a label) when children are passed', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox id="x">click here</PaperCheckbox>);
      let result = shallowRenderer.getRenderOutput();
      assert(Array.isArray(result.props.children));
      assert.equal(result.props.children.length, 2);
    });
  });

  describe('props', () => {
    it('renders children as a label', () => {
      let instance = TestUtils.renderIntoDocument(<PaperCheckbox id="y">test label</PaperCheckbox>);
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
            >
              Click the label too
            </PaperCheckbox>
          </div>
        );
      }
    };

    it('calls the onClick callback when clicked', () => {
      let instance = TestUtils.renderIntoDocument(<Container />);
      let reactCheckbox = TestUtils.findRenderedComponentWithType(instance, PaperCheckbox);
      let domCheckbox = TestUtils.findRenderedDOMComponentWithClass(instance, 'checkbox');

      assert.equal(reactCheckbox.props.checked, false);

      TestUtils.Simulate.click(domCheckbox);
      assert.equal(reactCheckbox.props.checked, true);

      TestUtils.Simulate.click(domCheckbox);
      assert.equal(reactCheckbox.props.checked, false);
    });

    it('calls the onClick callback when the label is present and clicked', () => {
      let instance = TestUtils.renderIntoDocument(<Container />);
      let reactCheckbox = TestUtils.findRenderedComponentWithType(instance, PaperCheckbox);
      let domLabel = TestUtils.findRenderedDOMComponentWithTag(instance, 'label');

      assert.equal(reactCheckbox.props.checked, false);

      TestUtils.Simulate.click(domLabel);
      assert.equal(reactCheckbox.props.checked, true);

      TestUtils.Simulate.click(domLabel);
      assert.equal(reactCheckbox.props.checked, false);
    });
  });
});
