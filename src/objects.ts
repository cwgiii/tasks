import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    ID: number,
    NAME: string,
    TYPE: QuestionType
): Question {
    return {
        id: ID,
        name: NAME,
        body: "",
        type: TYPE,
        options: [],
        expected: "",
        points: 1,
        published: false
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    answer = answer.toLowerCase();
    answer = answer.trim();
    if (question.expected.toLowerCase() == answer) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type == "short_answer_question") {
        if (answer != null) {
            return true;
        } else {
            return false;
        }
    } else {
        if (question.options.includes(answer)) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    let new_string = "";
    new_string += question.id;
    new_string += ": ";
    if (question.name.length > 10) {
        new_string += question.name.substring(0, 10);
    } else {
        new_string += question.name;
    }
    return new_string;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    let new_string = "";
    new_string += "# " + question.name + "\n";
    new_string += question.body;
    if (question.type == "multiple_choice_question") {
        for (const option of question.options) {
            new_string += "\n- " + option;
        }
        return new_string;
    } else {
        return new_string;
    }
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    const new_question = { ...question, name: newName };
    return new_question;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    let new_question;
    if (question.published) {
        new_question = { ...question, published: false };
    } else {
        new_question = { ...question, published: true };
    }
    return new_question;
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(
    inserted_id: number,
    oldQuestion: Question
): Question {
    const new_question = {
        ...oldQuestion,
        id: inserted_id,
        name: "Copy of " + oldQuestion.name,
        published: false
    };
    return new_question;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    const new_question = {
        ...question,
        options: [...question.options, newOption]
    };
    return new_question;
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    inserted_id: number,
    inserted_name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    const new_question = {
        ...contentQuestion,
        published: false,
        points: points,
        id: inserted_id,
        name: inserted_name
    };
    return new_question;
}
