import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { reducer } from '../reducer';
import { Action } from '../action';
import history from '../../history';

type Reducer = ReturnType<typeof reducer>

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === Action.REDIRECT_TO_ROUTE) {
          history.push(action.payload);
        }

        return next(action);
      };
