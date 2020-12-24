/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import {Machine, interpret, assign} from "xstate";
import { inspect } from '@xstate/inspect';
inspect({iframe: false});

const fetchMachine = Machine({
    id: 'fetch',
    initial: 'idle',
    context: {
      retries: 0
    },
    states: {
      idle: {
        on: {
          FETCH: 'loading'
        }
      },
      loading: {
        on: {
          RESOLVE: 'success',
          REJECT: 'failure'
        }
      },
      success: {
        type: 'final'
      },
      failure: {
        on: {
          RETRY: {
            target: 'loading',
            actions: assign({
              retries: (context, event) => context.retries + 1
            })
          }
        }
      }
    }
  });

const service = interpret(fetchMachine, { devTools: true });

service.start();