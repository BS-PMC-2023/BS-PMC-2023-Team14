import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import GoalsDisplay from "./GoalsDisplay";

jest.mock("axios");

describe("GoalsDisplay", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetchGoals should fetch goals data and update state", async () => {
    const userEmail = 'salaqe@ac.sce.ac.il';
    const goalsData = {
      currentWeight: 70,
      currentLength: 180,
      goalWeight: 65,
      muscleGain: 5,
      exerciseDays: 4,
    };
    axios.get.mockResolvedValueOnce({ data: { goals: goalsData } });

    const wrapper = shallow(<GoalsDisplay />);
    wrapper.setState({ userEmail });

    await wrapper.instance().fetchGoals();

    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:4000/api/user/getgoals",
      {
        params: {
          email: userEmail,
        },
      }
    );
    expect(wrapper.state("goals")).toEqual(goalsData);
  });

  test("calculateBMI should return the correct BMI value", () => {
    const wrapper = shallow(<GoalsDisplay />);
    const instance = wrapper.instance();

    const weight = 70;
    const height = 180;
    const expectedBMI = "21.60";

    const result = instance.calculateBMI(weight, height);

    expect(result).toBe(expectedBMI);
  });
});

