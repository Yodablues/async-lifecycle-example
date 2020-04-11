import NonAsync from "@/components/NonAsync.vue";
import { shallowMount } from "@vue/test-utils";

describe("test.vue", () => {
  it("catch exception", () => {
    expect(() =>{
      shallowMount(NonAsync);
    }).toThrow('test');
  });
});
