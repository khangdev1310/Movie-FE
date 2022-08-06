import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  Middleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import { rootSaga } from './sagas/rootSaga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

export const configStore = (
  initialState: any = {},
  additionalMiddleware: Middleware[] = []
) => {
  const store: Store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...additionalMiddleware, ...middleWare))
  );

  sagaMiddleWare.run(rootSaga);

  return {
    store,
  };
};

const { store } = configStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default configStore;
