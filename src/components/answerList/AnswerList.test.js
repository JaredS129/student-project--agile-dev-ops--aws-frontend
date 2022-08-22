import { render, screen, within } from "@testing-library/react";
import AnswerList from "./AnswerList";
import answerData from "../../data/answers.json";

describe("AnswerList", () => {
  const answers = answerData["1"];
  render(<AnswerList answers={answers} />);
  const listItems = screen.getAllByRole("listitem");

  test("renders a list of answers", () => {
    expect(listItems).toHaveLength(answers.length);
  });

  test("renders the correct answer titles", () => {
    listItems.forEach((item, index) => {
      const { getByRole } = within(item);
      const { answerTitle } = answers[index];
      expect(getByRole("heading", { level: 3 })).toHaveTextContent(answerTitle);
    });
  });

  test("renders the correct summaries", () => {
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { answerText } = answers[index];
      expect(getByText(answerText)).toHaveTextContent(answerText);
    });
  });
});