import FETCH_WEATHER from '../actions/index';

export default function(state = [], action) {
  switch (action.type){
    case FETCH_WEATHER:
      // Mutates the array, so we use the new es6 method
      // return state.concat([action.payload.data]);
      // ES6 way of concatinating the two arrays, returns a new array in the
      // form of [city, city, city] not [city, [city, city]]
      return [ action.payload.data, ...state ];
  }
  return state;
}
