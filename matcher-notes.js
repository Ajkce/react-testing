[{"content":"# Matchers\n\nMatchers help make sure that a value is what we expect it to be.  \n\nA project generated by Create React App has access to all the matchers included in Jest, as well as matchers defined in the @testing-library/jest-dom package.\n\n| Name                      | Link                                                                                       |\n|---------------------------|--------------------------------------------------------------------------------------------|\n| Jest                      | https://jestjs.io/docs/mock-function-api\n| @testing-library/jest-dom | https://github.com/testing-library/jest-dom |\n\n\n","type":"text","id":"x1gjv"},{"content":"import { screen, render, within } from '@testing-library/react';\n\nfunction FormData() {\n  return (\n    <div>\n      <button>Go Back</button>\n      <form aria-label=\"form\">\n        <button>Save</button>\n        <button>Cancel</button>\n      </form>\n    </div>\n  )\n}\nrender(<FormData />);","type":"code","id":"0j6z9"},{"content":"function toContainRole(container, role, quantity = 1) {\r\n\r\nconst elements = within(container).queryAllByRole(role);\r\n\r\nif(elements.length === quantity){\r\n  return {\r\n    pass: true\r\n  }\r\n}\r\n\r\nreturn {\r\n  pass: false,\r\n  message: () => `Expected to fing ${quantity} ${role} elements. Found ${elements.length} instead `\r\n}\r\n}\r\n\r\nexpect.extend({toContainRole})","type":"code","id":"ywl6o"},{"content":"test('the form displays two buttons', () => {\n  render(<FormData />);\n\n  const form = screen.getByRole('form');\n\n\n  expect(form).toContainRole('button', 2);\n});","type":"code","id":"gfgqo"}]