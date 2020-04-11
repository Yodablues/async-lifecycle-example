import Async from "@/components/Async.vue";
import { shallowMount } from "@vue/test-utils";

describe("test.vue", () => {
  it("catch exception", async done => {
    let passed = false;
    expect.assertions(1);
    try {
      await shallowMount(Async);
    } catch (ex) {
      expect(ex.message).toBe("test");
      passed = true;
    } finally {
      done();
    }
    expect(passed).toBe(true);
  });
});
