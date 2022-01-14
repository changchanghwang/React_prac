// bucket.js

// Actions
// const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'bucket/CREATE';
const COMPLETE = 'bucket/COMPLETE';
const REMOVE = 'bucket/REMOVE';

const initialState = {
  list: [
    { text: '영화관 가기', completed: false },
    { text: '매일 책읽기', completed: false },
    { text: '수영 배우기', completed: false },
    { text: '코딩', completed: false },
  ],
};

// Action Creators
// export function loadWidgets() {
//   return { type: LOAD };
// }

export function createBucket(bucket) {
  console.log('생성 액션 생성');
  return { type: CREATE, bucket };
}

export function completeBucket(index) {
  console.log('완료 액션 생성');
  return { type: COMPLETE, index };
}

export function removeBucket(index) {
  console.log('삭제 액션 생성');
  return { type: REMOVE, index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // 생성
    case 'bucket/CREATE': {
      console.log('리듀서 동작. 값변경');
      const newBucket = [
        ...state.list,
        { text: action.bucket, completed: false },
      ];
      return { list: newBucket };
    }
    //삭제
    case 'bucket/REMOVE': {
      const newBucket = state.list.filter(
        (bucket, index) => index !== parseInt(action.index)
      );
      return { list: newBucket };
    }
    //완료
    case 'bucket/COMPLETE': {
      const newBucket = state.list.map((v, idx) => {
        if (idx === parseInt(action.index)) {
          return { ...v, completed: true };
        } else {
          return v;
        }
      });
      console.log(newBucket);
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
