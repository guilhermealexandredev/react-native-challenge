import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';
import reducer from './blocks';

describe('Reducer::Blocks', ()=> {
 const getInitialState = () => {
   return initialState().blocks;
 }

 it('set initial states by default', () =>{
   const action = {type: 'invalid'}
   const expected = getInitialState();

   expect(reducer(undefined, action)).toEqual(expected);
 })
 const nodeId = 'http://test.com';

 it('should handle GET_BLOCKS_START', ()=> {
   const appState = getInitialState();
   const action = { type: actionTypes.GET_BLOCKS_START, nodeId};
   const expected = {
     [action.nodeId]: {
       loading: true,
       error: null
     }
   };
   expect(reducer(appState, action)).toEqual(expected);
 });

 it('should handle GET_BLOCKS_SUCCESS', () => {
   const appState = {
    [nodeId]: {
      loading: true,
      error: null
    }
   }
   const mock = {
     id: 1,
     type: 'Blocks',
     attributes: {
       index: 1,
       data: 'Mock Blocks'
     }
   };

   const action = {
     type: actionTypes.GET_BLOCKS_SUCCESS,
     nodeId,
     data: mock
   };

   const expected = {
    [nodeId]: {
      loading: false,
      error: null,
      data: mock
    }
   }
   expect(reducer(appState, action)).toEqual(expected);
 });

 it('should handle GET_BLOCKS_FAILURE', () => {
   const appState = {
    [nodeId]: {
      loading: true,
      error: null
    }
   };

   const error = 'Error message';
   const action = {
     type: actionTypes.GET_BLOCKS_FAILURE,
     nodeId,
     error
   };

   const expected = {
    [nodeId]: {
      loading: false,
      error,
      data: null
    }
   }
   expect(reducer(appState, action)).toEqual(expected);   
 })

})

