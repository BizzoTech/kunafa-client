import {resetHistory, navigateTo, transiteTo, goBack, goTo} from '../history';

describe('History action creators test', () => {

  it('resetHistory should return RESET_HISTORY action', () => {
    expect(resetHistory()).toEqual({
      type: 'RESET_HISTORY'
    });
  });

  // it('navigateTo should return NAVIGATE_TO action with the passed routeName and params', () => {
  //   const routeName = 'TEST_ROUTE';
  //   const params = {
  //     p1: 'v1'
  //   }
  //   expect(navigateTo(routeName, params)).toEqual({
  //     type: 'NAVIGATE_TO',
  //     route: {
  //       name: routeName,
  //       params
  //     }
  //   });
  // });
  //
  // it('transiteTo should return TRANSITE_TO action with the passed routeName and params', () => {
  //   const routeName = 'TEST_ROUTE';
  //   const params = {
  //     p1: 'v1'
  //   }
  //   expect(transiteTo(routeName, params)).toEqual({
  //     type: 'TRANSITE_TO',
  //     route: {
  //       name: routeName,
  //       params
  //     }
  //   });
  // });
  //
  // it('goTo should return GO_TO action with the passed routeName and params', () => {
  //   const routeName = 'TEST_ROUTE';
  //   const params = {
  //     p1: 'v1'
  //   }
  //   expect(goTo(routeName, params)).toEqual({
  //     type: 'GO_TO',
  //     route: {
  //       name: routeName,
  //       params
  //     }
  //   });
  // });
  //
  // it('goBack should return GO_BACK action', () => {
  //   expect(goBack()).toEqual({
  //     type: 'GO_BACK'
  //   });
  // });

});
