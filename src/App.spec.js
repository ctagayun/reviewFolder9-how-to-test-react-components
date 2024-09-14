import React from 'react';
import renderer from 'react-test-renderer';
import { Counter } from './App';

/*
  Jest is a test runner, which gives you the ability to run tests with Jest 
  from the command line. In addition, Jest offers you functions for test suites, 
  test cases, and assertions. Of course the frameworks offers more than this 
  (e.g. spies, mocks, stubs, etc.); but essentially that's 
  everything needed for now to understand why we need Jest in the first place.
  (see https://www.robinwieruch.de/react-testing-library/)
*/
// describe('My Test Suite', () => {
//     it('My Test Case', () => {
//       expect(true).toEqual(true);
//     });
//   });

  describe('true is truthy and false is falsy', () => { //describe-block
    it('true is truthy', () => {                        //it-block
      expect(true).toBe(true);
    });
  
    it('false is falsy', () => {                        //it-block
      expect(false).toBe(false);
    });
  });

   //Let's test the function defined inline
   function add(x, y) {
    return x + y;
   }
  
   describe('add', () => {
    it('add up two values', () => {
      expect(add(2, 4)).toBe(6);
    });
  });

    //Let's test a function defined in file math.js called "sum"
    //To do this import the file in this case.
    //   describe('sum', () => {
    //     it('sums up two values', () => {
    //       expect(sum(2, 4)).toBe(6);
    //     });
    //   });

  //Let's test a component call counter which is defined in another file (in this case  App.js).
  //First import the component here
  // describe('Counter', () => {
  //   test('snapshot renders', () => {
  //     const component = renderer.create(<Counter counter={1} />);
  //     let tree = component.toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });