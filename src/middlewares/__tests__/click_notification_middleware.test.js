import clickNotificationMiddleware from '../click_notification_middleware';


const getNotificationRoute = notification => {
  return {
    name: 'ANY_ROUTE'
  }
}

describe('Click notification middleware tests', () => {

  it('should call next after accepting nonrelevant action', () => {
    const next = jest.fn();
    const action = {
      type: 'SOME_ACTION'
    }
    clickNotificationMiddleware({}, {getNotificationRoute})(next)(action);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toBeCalledWith(action);
  });

  it('should create navigation action after accepting notification', () => {
    const next = jest.fn();
    const action = {
      type: 'CLICK_NOTIFICATION',
      notification: 'SOME_NOTIFICATION'
    }
    clickNotificationMiddleware({}, {getNotificationRoute})(next)(action);
    expect(next).toHaveBeenCalledTimes(2);
    expect(next).toBeCalledWith({
      type: 'NAVIGATE_TO',
      route: {
        name: 'ANY_ROUTE'
      }
    });
    expect(next).toBeCalledWith(action);
  });

  it('should create GO_TO action after accepting notification external click', () => {
    const next = jest.fn();
    const action = {
      type: 'CLICK_NOTIFICATION',
      external: true,
      notification: 'SOME_NOTIFICATION'
    }
    clickNotificationMiddleware({}, {getNotificationRoute})(next)(action);
    expect(next).toHaveBeenCalledTimes(2);
    expect(next).toBeCalledWith({
      type: 'GO_TO',
      route: {
        name: 'ANY_ROUTE'
      }
    });
    expect(next).toBeCalledWith(action);
  });

});
