import { clickNotification, clickExternalNotification } from "../notifications";

describe("Notifications action creators test", () => {
  it("clickNotification should return CLICK_NOTIFICATION action", () => {
    const notification = {
      name: "TEST_NOTIFICATION"
    };
    expect(clickNotification(notification)).toEqual({
      type: "CLICK_NOTIFICATION",
      notification
    });
  });

  it("clickExternalNotification should return CLICK_NOTIFICATION action marked as external", () => {
    const notification = {
      name: "TEST_NOTIFICATION"
    };
    expect(clickExternalNotification(notification)).toEqual({
      type: "CLICK_NOTIFICATION",
      notification,
      external: true
    });
  });
});
