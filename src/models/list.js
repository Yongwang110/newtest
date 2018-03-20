import { queryFakeList, queryTest, queryImage } from '../services/api';

export default {
  namespace: 'list',

  state: {
    list: [],
    lst: [],
    ll: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);

      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *fetch1({ payload }, { call, put }) { // 由于数据传输有延迟  所以  刚开始的时候 他是空的
      const response = yield call(queryTest, payload);
      if (response.code === 200) {
        console.log(response, 34567);
        yield put({
          type: 'queryList1',
          payload: response.data,
        });
      }
    },
    *remove({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'rem',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    queryList1(state, action) {
      return {
        ...state,
        lst: action.payload,
      };
    },
    rem(state) {
      return {
        ...state,
        list: state.list.findIndex(item => item.id === 'fake-list-0'),
      };
      // return state.filter(todo => todo.id !== id);
    },
    appendList(state, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
  },
};
