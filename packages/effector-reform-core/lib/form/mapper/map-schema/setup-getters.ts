import { FormApi } from '../types';
import { EventCallable, Event, Store } from 'effector';

export function setupGetters<Api extends FormApi>($api: Store<Api>) {
  return {
    get(key: string): { changed: Event<any>; change: EventCallable<any> } {
      const api = $api.getState();

      return {
        changed: api[key].changed,
        change: api[key].setValue,
      };
    },
  };
}
