import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Goals from './components/setgoals';
import Contact from "./components/Contact/contact";
import axios from 'axios';

jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(() => Promise.resolve(true))
}));

jest.mock('axios');

describe("Contact", () => {
  test("renders Contact component", () => {
    render(<Contact />);
    
    // test header
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/If you have any questions or comments, please fill out the form below and/i)).toBeInTheDocument();
    expect(screen.getByText(/we will get back to you as soon as possible./i)).toBeInTheDocument();

    // test input fields
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
  });

  test("updates on input change", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const messageInput = screen.getByLabelText(/Message:/i);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });

    expect(nameInput.value).toBe('John');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello!');
  });

  test("calls emailjs.sendForm on form submit", async () => {
    render(<Contact />);

    userEvent.type(screen.getByLabelText(/Name:/i), "John");
    userEvent.type(screen.getByLabelText(/Email:/i), "john@example.com");
    userEvent.type(screen.getByLabelText(/Message:/i), "Hello!");

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(emailjs.sendForm).toHaveBeenCalled();
  });
});

describe('<Goals />', () => {
  it('should change state on input change and submit form', async () => {
    const { getByLabelText, getByRole } = render(<Goals />);
    localStorage.setItem('email', 'test@test.com');

    // Simulate filling in the form
    fireEvent.change(getByLabelText('Current Weight:'), { target: { value: '150' } });
    fireEvent.change(getByLabelText('Goal Weight:'), { target: { value: '130' } });
    fireEvent.change(getByLabelText('muscle gain:'), { target: { value: '20' } });
    fireEvent.change(getByLabelText('Exercise days:'), { target: { value: '5' } });

    // Simulate form submission
    fireEvent.click(getByRole('button'));

    // Wait for the post request to complete
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    // Verify the axios.post was called with correct parameters
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:4000/api/user/setgoals",
      {
        email: 'test@test.com',
        currentWeight: '150',
        goalWeight: '130',
        muscleGain: '20',
        exerciseDays: '5',
      }
    );
  });
});


