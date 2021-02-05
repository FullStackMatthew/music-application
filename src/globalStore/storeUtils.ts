import { useEffect, useState } from "react";
import { Subscription } from "rxjs";

export interface BaseStore<TState> {
  init: () => void;
  subscribe: (setState: (v: TState) => void) => Subscription;
  initialState: TState;
  [x: string]: any;
}

export const useBaseStore = <TState>(store: BaseStore<TState>) => {
  const [storeState, setStoreState] = useState(store.initialState);

  useEffect(() => {
    const subscription = store.subscribe(setStoreState);
    store.init();

    return () => {
      if (subscription && !subscription.closed) {
        subscription.unsubscribe();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return storeState;
};
