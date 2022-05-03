const assert = require('chai').assert;
const { describe } = require('mocha');

// let sayHello = testsService.addNumbers()
// let addNumbers = testsService.addNumbers()

describe('TestsService', function () {

    describe('Say Hello', function () {
        it('Function should return a string', function () {
            assert.typeOf(sayHello, 'string', "Double check what's in your return statement.")
        })
        it('Function should return "hello"', function () {
            assert.equal(sayHello, 'hello', "Make sure you spelled 'hello' correctly!")
        })
    })
    describe('Add Numbers', function () {
        it('Function should return a number', function () {
            assert.typeOf(addNumbers, 'Number', "Make sure you're returning a number!")
        })
        it('Function should return the sum of both numbers', function () {
            assert.equal(addNumbers, 9)
        })
    })
})