# Learning Playwright Fundamentals 2x

A Playwright test automation project covering browser automation fundamentals.

## Structure

- `tests/` — Test specifications
  - `01_Basics/` — Basic Playwright test examples
  - `04_Session_Storage/` — Session storage & VWO login tests
  - `05_Allure_Reporting/` — VWO dashboard tests with `test.step()` & screenshot attachments
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
