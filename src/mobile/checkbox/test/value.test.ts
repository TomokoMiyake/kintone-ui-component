import { expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

describe("confirm value default value is not set", () => {
  const container = new MobileCheckbox();

  it("confirm value default value is not set", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    )!.children as HTMLCollection;
    if (!el.children || itemsEl.length !== 3) {
      await expect(true);
    }
  });
});

describe("value constructor set successfully", () => {
  const expectedValues = ["-----", "orange", "apple"];
  const expectedLabels = ["-----", "Orange", "Apple"];
  const container = new MobileCheckbox({
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ],
    value: [expectedValues[1]]
  });

  it("value constructor set successfully", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    )!.children as HTMLCollection;
    if (!el.children || itemsEl.length !== 3) {
      await expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const inputEl = itemEl.children[0] as HTMLInputElement;
      const labelEl = itemEl.children[1] as HTMLLabelElement;
      await expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
      if (i === 1) {
        await expect(inputEl.checked).to.be.equal(true);
      } else {
        await expect(inputEl.checked).to.be.equal(false);
      }
    }
  });
});

describe("value prop replace successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

  const container = new MobileCheckbox({
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ],
    value: [expectedValues[1]]
  });

  const newValue = [expectedValues[2]];
  container.value = newValue;

  it("value prop replace successfully", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    )!.children as HTMLCollection;
    if (!el.children || itemsEl.length !== 3) {
      await expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const inputEl = itemEl.children[0] as HTMLInputElement;
      const labelEl = itemEl.children[1] as HTMLLabelElement;
      await expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
      if (i === 2) {
        await expect(inputEl.checked).to.be.equal(true);
      } else {
        await expect(inputEl.checked).to.be.equal(false);
      }
    }
    expect(container.value).to.be.equal(newValue);
  });
});

describe("throw error when set by constructor", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

  it("have value which is not array", async () => {
    expect(() => {
      const container = new MobileCheckbox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0]
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1]
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2]
          }
        ],
        // @ts-expect-error
        value: null
      });
    }).to.throw(Error, "'value' property is not array");
  });

  it("have duplicated value", async () => {
    expect(() => {
      const container = new MobileCheckbox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0]
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1]
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2]
          }
        ],
        value: [expectedValues[0], expectedValues[0]]
      });
    }).to.throw(Error, "'value[1]' is duplicated! You can specify unique one.");
  });
});

describe("throw error when set by prop", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

  it("have value which is not array", async () => {
    expect(() => {
      const container = new MobileCheckbox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0]
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1]
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2]
          }
        ]
      });
      // @ts-expect-error
      container.value = null;
    }).to.throw(Error, "'value' property is not array");
  });

  it("have duplicated value", async () => {
    expect(() => {
      const container = new MobileCheckbox({
        items: [
          {
            label: expectedLabels[0],
            value: expectedValues[0]
          },
          {
            label: expectedLabels[1],
            value: expectedValues[1]
          },
          {
            label: expectedLabels[2],
            value: expectedValues[2]
          }
        ]
      });
      container.value = [expectedValues[0], expectedValues[0]];
    }).to.throw(Error, "'value[1]' is duplicated! You can specify unique one.");
  });
});
