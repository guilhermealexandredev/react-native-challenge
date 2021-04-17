import * as actionTypes from '../constants/actionTypes';

const getBlocksStart = (nodeId) => {
  return {
    type: actionTypes.GET_BLOCKS_START,
    nodeId
  }
};

const getBlocksSuccess = (nodeId, data) => {
  return {
    type: actionTypes.GET_BLOCKS_SUCCESS,
    nodeId,
    data
  }
};

const getBlocksFailure = (nodeId, error) => {
  return {
    type: actionTypes.GET_BLOCKS_FAILURE,
    nodeId,
    error
  }
};

export function getBlocks(node){
  return async dispatch => {
    try {
      dispatch(getBlocksStart(node.url));
      const req = await fetch(`${node.url}/api/v1/blocks`);
      if(req.status >= 400){
        dispatch(getBlocksFailure(node.url, 'Error fetching blocks'));
      }
      const json = await req.json();      
      dispatch(getBlocksSuccess(node.url, json.data));

    }catch(err){
      dispatch(getBlocksFailure(node.url, 'Error fetching blocks'));
    }
  }
}