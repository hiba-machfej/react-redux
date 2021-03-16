// import { take, delay, put, call } from 'redux-saga/effects';

// const double = (num) => {
//   return num * 2;
// };
// export function* testSaga() {
//   while (true) {
//     console.log('starting saga');
//     const state = yield take('TEST_MESSAGE');
//     const a = yield call(double, 2);
//     console.log(a);
//     const b = yield double(3);
//     console.log(b);
//     console.log('finished saga', state);
//   }
// }

// export function* dispatchTest() {
//   while (true) {
//     yield delay(1000);
//     yield put({ type: 'TEST_MESSAGE', payload: 1000 });
//   }
// }
