import NonAsync from "@/components/NonAsync.vue";
import { shallowMount } from "@vue/test-utils";

describe("test.vue", () => {
  it("catch exception", () => {
    let passed = false;
    expect.assertions(1);
    try {
      shallowMount(NonAsync);
    } catch (ex) {
      expect(ex.message).toBe("test");
      passed = true;
    }
    expect(passed).toBe(true);
  });
});
