import store from './store';
import { bugAdded, bugResolved, bugRemoved } from './actions';

// Subscribe to store changes
const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
})

// Add Bug
store.dispatch(bugAdded('Bug 1'));

// Resolve Bug
store.dispatch(bugResolved(1));

// Remove Bug
store.dispatch(bugRemoved(1));

unsubscribe();

// console.log(store.getState());