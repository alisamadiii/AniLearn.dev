import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Tabs from ".";

describe("Tabs", () => {
  test("renders the component correctly", () => {
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    const stateValue = 1;
    const setStateValue = jest.fn();

    const { container } = render(
      <Tabs
        tabs={tabs}
        stateValue={stateValue}
        setStateValue={setStateValue}
      />
    );
    const ulElement = screen.getByRole("list");
    const liList = container.querySelectorAll("li");

    expect(ulElement).toBeInTheDocument();
    expect(liList.length).toBe(tabs.length);
  });

  test("changing tab", async () => {
    user.setup();
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    let stateValue = 1;
    const setStateValue = jest.fn();

    render(
      <Tabs
        tabs={tabs}
        stateValue={stateValue}
        setStateValue={setStateValue}
      />
    );

    const firstTab = screen.getByText(tabs[0]);
    await user.click(firstTab);
    stateValue = 1;

    const secondTab = screen.getByText(tabs[1]);
    await user.click(secondTab);
    stateValue = 2;
  });
});
