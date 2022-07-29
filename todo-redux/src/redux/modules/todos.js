// src/redux/modules/counter.js

// Action Value
const Form_Submit = 'Form_Submit';
const Form_Delete = 'Form_Delete';
const Form_Done = 'Form_Done';

// Action Creator
export const formSubmit = (payload) => {
  return {
    type: Form_Submit,
    payload,
  };
};

export const formDelete = (payload) => {
  return {
    type: Form_Delete,
    payload,
  };
};

export const formDone = (payload) => {
  return {
    type: Form_Done,
    payload,
  };
};

// Initial State
const initialState = [
  {
    id: `id-${Math.floor(Math.random() * 10000)}`,
    title: 'default title',
    body: 'default body',
    isDone: false,
  },
];

// Reducer 기본형태

const counter = (state = initialState, action) => {
  switch (action.type) {
    case Form_Submit:
      return [
        ...state,
        {
          id: `id-${Math.floor(Math.random() * 10000)}`,
          title: action.payload.title,
          body: action.payload.body,
          isDone: false,
        },
      ];
    case Form_Delete:
      return state.filter((todo) => todo.id !== action.payload);
    case Form_Done:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

// export default reducer
export default counter;
