import { combineEpics } from 'redux-observable';
import { rootEpic } from './containers/App/epics';

export default function createRootEpic(asyncEpics = []) {
  return combineEpics(rootEpic, ...asyncEpics);
}
