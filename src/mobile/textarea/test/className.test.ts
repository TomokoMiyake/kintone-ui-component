import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("confirm className default prop is null", () => {
  const container = new MobileTextArea();

  it("confirm className default prop is null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(0);
  });
});

describe("className constructor set successfully", () => {
  const container = new MobileTextArea({ className: "options-class" });

  it("className constructor set successfully'", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("options-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className prop replace successfully", () => {
  const container = new MobileTextArea({ className: "options-class" });
  container.className = "replace-class";

  it("className prop replace successfully'", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("replace-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className default prop set to null", () => {
  // @ts-expect-error
  const container = new MobileTextArea({ className: null });

  it("className default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});

describe("className prop set to null", () => {
  const container = new MobileTextArea();
  // @ts-expect-error
  container.className = null;

  it("className prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});
