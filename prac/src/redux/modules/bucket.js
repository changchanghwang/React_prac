// bucket.js

// Actions
// const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'bucket/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'bucket/REMOVE';

const initialState = {
  list: ['영화관 가기', '매일 책읽기', '수영 배우기', '코딩'],
};

// Action Creators
// export function loadWidgets() {
//   return { type: LOAD };
// }

export function createBucket(bucket) {
  console.log('액션생성');
  return { type: CREATE, bucket };
}

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

export function removeBucket(index) {
  console.log('삭제액션생성');
  return { type: REMOVE, index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'bucket/CREATE': {
      console.log('리듀서 동작. 값변경');
      const newBucket = [...state.list, action.bucket];
      return { list: newBucket };
    }
    case 'bucket/REMOVE': {
      const newBucket = state.list.filter((bucket, index) => {
        return index !== parseInt(action.index);
      });
      return { list: newBucket };
    }
    default:
      return state;
  }
}

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get('/widget').then((widget) => dispatch(updateWidget(widget)));
// }
