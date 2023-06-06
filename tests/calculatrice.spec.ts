import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Desmos/);
});

test("tester une addition", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "Plus" }).click();
  await page.getByRole("button", { name: "1" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page).toBeTruthy();
});

test("tester une multiplication", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "Multiplier" }).click();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "Entrée", exact: true }).click();
  expect(page).toBeTruthy();
});
