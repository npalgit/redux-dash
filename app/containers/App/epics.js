import { STAGE_INC } from '../HomePage/constants';
import { loadAnotherForm } from './actions';

export const rootEpic = (action$) => action$.ofType(STAGE_INC).mapTo(loadAnotherForm());
 // $ means observable
