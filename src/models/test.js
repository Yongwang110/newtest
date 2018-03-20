import { queryTest } from '../services/api';

export default {
  state: {
    lst: { name: '123' },
  },
  effects: {
    *etch({ payload }, { call, put }) {
      const response = yield call(queryTest, payload);
      console.log(response, 1234567);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return {
        ...state,
        lst: action,
      };
    },
  },
};

