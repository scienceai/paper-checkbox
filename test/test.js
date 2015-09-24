import assert from 'assert';
import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PaperCheckbox from '../src/paper-checkbox';
import { jsdom } from 'jsdom';


describe('PaperCheckbox', () => {

  describe('html output', () => {

    it('renders a div with className "paper-checkbox"', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox />);
      let result = shallowRenderer.getRenderOutput();
      assert.equal(result.type, 'div');
      assert(result.props.className.match(/paper\-checkbox/));
    });

    it('renders a nested div with className "checkbox"', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox />);
      let result = shallowRenderer.getRenderOutput();
      let checkbox = result.props.children;
      assert.equal(checkbox.type, 'div');
      assert(checkbox.props.className.match(/checkbox/));
    });

    it('renders a grandchild div with className "checkmark"', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox />);
      let result = shallowRenderer.getRenderOutput();
      let checkmark = result.props.children.props.children;
      assert.equal(checkmark.type, 'div');
      assert(checkmark.props.className.match(/checkmark/));
    });

  });

  describe('props', () => {

    it('adds the "disabled" class to the parent div when disabled', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox disabled={true} />);
      let result = shallowRenderer.getRenderOutput();
      assert(result.props.className.match(/disabled/));
    });

    it('adds the "checked" class to the checkbox div when checked', () => {
      let shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<PaperCheckbox checked={true} />);
      let result = shallowRenderer.getRenderOutput();
      let checkbox = result.props.children;
      assert(checkbox.props.className.match(/checked/));
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
              ref='checkbox'
              checked={this.state.checked}
              onClick={() => this.setState({ checked: !this.state.checked })}
            />
          </div>
        );
      }
    };

    before(() => {
      global.document = jsdom('<!doctype html><html><body></body></html>');
      global.window = global.document.defaultView;
    });

    it('calls an onClick callback when clicked', () => {
      let instance = TestUtils.renderIntoDocument(<Container />);
      let container = TestUtils.findRenderedComponentWithType(instance, Container);
      let reactCheckbox = TestUtils.findRenderedComponentWithType(instance, PaperCheckbox);
      let domCheckbox = findDOMNode(container.refs.checkbox);

      assert.equal(reactCheckbox.props.checked, false);

			TestUtils.Simulate.click(domCheckbox);
      assert.equal(reactCheckbox.props.checked, true);

			TestUtils.Simulate.click(domCheckbox);
      assert.equal(reactCheckbox.props.checked, false);
    });

  });

});
