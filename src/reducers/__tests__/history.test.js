import history from "../history";
import { Reducer } from "redux-testkit";

const startWithHome = {
  path: [""]
};
const startWithLogin = {
  path: ["login"]
};

describe("History reducer", () => {
  it("should start with login if no profileId provided", () => {
    expect(history(undefined, {})).toEqual(startWithLogin);
  });

  // it('should start with home if profileId is provided', () => {
  //   expect(history(undefined, {}, {profileId: 'test'})).toEqual(startWithHome);
  // });
  //
  // it('shouldn\'t be affected by not existing action ', () => {
  //   Reducer(history).withState(startWithHome).expect({type: 'NOT_EXISTING'}).toReturnState(startWithHome);
  // });
  //
  // it('should handle RESET_HISTORY action', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE'
  //   }];
  //   Reducer(history).withState(state).expect({type: 'RESET_HISTORY'}).toReturnState(startWithLogin);
  // });
  //
  // it('GO_TO action should remove history routes and put the new route on top of home', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE1'
  //   },{
  //     name: 'ANY_ROUTE2'
  //   },{
  //     name: 'HOME'
  //   }];
  //   const action = {
  //     type: 'GO_TO',
  //     route: {
  //       name: 'ANY_ROUTE3'
  //     }
  //   }
  //   const result = [{
  //     name: 'ANY_ROUTE3',
  //   }, {
  //     name: 'HOME'
  //   }];
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('NAVIGATE_TO action should put the new route on top of current state', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE1'
  //   },{
  //     name: 'ANY_ROUTE2'
  //   },{
  //     name: 'HOME'
  //   }];
  //   const action = {
  //     type: 'NAVIGATE_TO',
  //     route: {
  //       name: 'ANY_ROUTE3'
  //     }
  //   }
  //   const result = [{
  //     name: 'ANY_ROUTE3',
  //   },{
  //     name: 'ANY_ROUTE1'
  //   },{
  //     name: 'ANY_ROUTE2'
  //   }, {
  //     name: 'HOME'
  //   }];
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('TRANSITE_TO action should remove current route and put the new route on top of remaining routes', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE1'
  //   },{
  //     name: 'ANY_ROUTE2'
  //   },{
  //     name: 'HOME'
  //   }];
  //   const action = {
  //     type: 'TRANSITE_TO',
  //     route: {
  //       name: 'ANY_ROUTE3'
  //     }
  //   }
  //   const result = [{
  //     name: 'ANY_ROUTE3',
  //   },{
  //     name: 'ANY_ROUTE2'
  //   }, {
  //     name: 'HOME'
  //   }];
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('TRANSITE_TO action should keep home route if it\'s the current route', () => {
  //   const state = startWithHome;
  //   const action = {
  //     type: 'TRANSITE_TO',
  //     route: {
  //       name: 'ANY_ROUTE3'
  //     }
  //   }
  //   const result = [{
  //     name: 'ANY_ROUTE3',
  //   }, {
  //     name: 'HOME'
  //   }];
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('GO_BACK action should remove current route and put it inside the last route as backFrom', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE1'
  //   },{
  //     name: 'ANY_ROUTE2'
  //   },{
  //     name: 'HOME'
  //   }];
  //   const action = {
  //     type: 'GO_BACK'
  //   }
  //   const result = [{
  //     name: 'ANY_ROUTE2',
  //     backFrom: {
  //       name: 'ANY_ROUTE1'
  //     }
  //   }, {
  //     name: 'HOME'
  //   }];
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('GO_BACK action should do nothing if there is only one route in history (the current)', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE1'
  //   }];
  //   const action = {
  //     type: 'GO_BACK'
  //   }
  //   const result = state;
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('START_LOADING action put loading route ontop of current routes', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE1'
  //   }];
  //   const action = {
  //     type: 'START_LOADING'
  //   }
  //   const result = [{
  //     name: 'LOADING'
  //   },{
  //     name: 'ANY_ROUTE1'
  //   }];;
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('LOGIN action should remove all LOGIN & LOADING routes', () => {
  //   const state = [{
  //     name: 'LOADING'
  //   },{
  //     name: 'LOGIN'
  //   },{
  //     name: 'ANY_ROUTE'
  //   },{
  //     name: 'HOME'
  //   }];
  //   const action = {
  //     type: 'LOGIN'
  //   }
  //   const result = [{
  //     name: 'ANY_ROUTE'
  //   },{
  //     name: 'HOME'
  //   }];
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('LOGIN action should startWithHome if no routes in history to go back to', () => {
  //   const state = [{
  //     name: 'LOADING'
  //   },{
  //     name: 'LOGIN'
  //   }];
  //   const action = {
  //     type: 'LOGIN'
  //   }
  //   const result = startWithHome;
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('SKIP_LOGIN action should remove login route and start with home', () => {
  //   const state = startWithLogin;
  //   const action = {
  //     type: 'SKIP_LOGIN'
  //   }
  //   const result = startWithHome;
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
  //
  // it('LOGOUT action should remove all routes and start with login', () => {
  //   const state = [{
  //     name: 'ANY_ROUTE1'
  //   },{
  //     name: 'ANY_ROUTE2'
  //   },{
  //     name: 'HOME'
  //   }];
  //   const action = {
  //     type: 'LOGOUT'
  //   }
  //   const result = startWithLogin;
  //   Reducer(history).withState(state).expect(action).toReturnState(result);
  // });
});
