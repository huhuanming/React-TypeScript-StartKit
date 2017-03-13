import { Layout } from "antd"
import { shallow } from "enzyme"
import "jest"
import * as React from "react"
import { App } from "../app"

const { Header } = Layout

const props = {
  doubleClick: jest.fn(),
  fetchWXIndustry: jest.fn(),
  temp: "",
}

describe("App", () => {
  it("renders without crashing", () => {
    const enzymeWrapper = shallow(<App {...props} />)
    expect(enzymeWrapper.find(Layout).length).toBe(2)
    expect(enzymeWrapper.find(Header).hasClass("header")).toBe(true)

    const buttons = enzymeWrapper.find("button")
    expect(buttons.at(0).text()).toBe("测试")
    expect(buttons.at(1).text()).toBe("双击测试")
    buttons.at(0).simulate("click")
    expect(props.fetchWXIndustry.mock.calls.length).toBe(1)
    buttons.at(0).simulate("click")
    expect(props.fetchWXIndustry.mock.calls.length).toBe(2)
  })
})
