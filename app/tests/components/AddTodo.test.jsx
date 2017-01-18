var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');


describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    describe('render', () => {
        it('should call onAddTodo if valid text is entered', () => {
            var spy =  expect.createSpy();

            var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
            var $el = $(ReactDOM.findDOMNode(addTodo));
            addTodo.refs.todoText.value = "Check mail";

            TestUtils.Simulate.submit($el.find('form')[0]);

            expect(spy).toHaveBeenCalledWith("Check mail");
        });
        it('should not call onAddTodo if invalid text is entered', () => {
            var spy =  expect.createSpy();

            var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
            // access the jquery selector for this component..
            var $el = $(ReactDOM.findDOMNode(addTodo));
            addTodo.refs.todoText.value = "";

            TestUtils.Simulate.submit($el.find('form')[0]);

            expect(spy).toNotHaveBeenCalled();
        });
    });


});