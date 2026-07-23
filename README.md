# Learning Playwright Fundamentals 2x

A Playwright test automation project covering browser automation fundamentals.

## Structure

- `tests/` — Test specifications
  - `01_Basics/` — Basic Playwright test examples
  - `04_Session_Storage/` — Session storage & VWO login tests
  - `05_Allure_Reporting/` — VWO dashboard tests with `test.step()` & screenshot attachments
  - `06_Multiple_Elements/` — Handling multiple elements & direct locator strategies
  - `07_WebTable_Element/` — Dynamic XPath & web table element handling
  - `08_Web_Select_Frames_Iframe/` — Select dropdowns, frames & iframe handling
  - `17_Task/` — Web table interactions, login URL verification & hover menu tasks
    - `Login_Verify_Url.spec.ts` — Login URL parameter validation
    - `WebTable_Element.spec.ts` — HR web table row iteration & delete action
    - `WebTable_Pagination.spec.ts` — Paginated webtable: find row across pages
    - `webTable_element_static.spec.ts` — Static webtable: filter row by text, read cell
    - `22_Hover_menu.spec.ts` — Hover to reveal submenu, click child, verify output
- `utils/` — Custom TTA reporter (`CustomReporter.ts`)
- `playwright.config.ts` — Playwright configuration (custom reporter enabled)

## Custom Reporter

The project uses a custom HTML reporter (`utils/CustomReporter.ts`) that generates a real-time TTA report with:
- Per-step screenshots, console logs, and timing
- Live-updating HTML report during test execution
- Test filtering by status and tags

Report output is written to `tta-report/` (gitignored).

## Getting Started

```bash
npm install
npx playwright test
```
