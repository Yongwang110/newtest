import { queryBasicProfile, queryTest, queryAdvancedProfile } from '../services/api';

export default {
  namespace: 'profile',

  state: {
    basicGoods: [],
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
    getTest:['1','2-2'],
  },

  effects: {//请求
    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicProfile);//以异步的方式调用函数
      yield put({//用来发起一条action
        type: 'show',
        payload: response,
      });
    },
      *tst({ payload }, { call, put }) {
        const response = yield call(queryTest, payload);
        yield put({
          type: 'redtst',
          payload: Array.isArray(response) ? response : [],
        });
      },
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {//发送   reducers里面应该只做state的数据返回
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    redtst(state, action) {
      return {
        ...state,
        state: action.payload
      };
    }
  },
};
