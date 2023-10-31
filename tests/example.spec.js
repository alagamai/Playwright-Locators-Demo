const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';
const getRandomInt = require('./utils'); // Adjust './utils' to the correct relative path

test.beforeEach(async ({ page }) => {
	await page.goto('https://demo.nopcommerce.com/');
});

test.describe('locators demo project', () => {
	test('register account using attribute css selectors', async ({ page }) => {
		// Expect a title "to contain" a substring.
		//await expect(page).toHaveTitle(/Playwright/);

		let firstName = faker.person.firstName();
		let lastName = faker.person.lastName();
		let email = faker.internet.email({ firstName, lastName });

		await page.locator('.ico-register').click();
		await page.locator('#gender-male').click();
		await page.locator('#FirstName').fill(firstName);
		await page.locator('#LastName').fill(lastName);
		const day = getRandomInt(1, 30);
		await page.locator('[name*="BirthDay"]').selectOption(`${day}`);
		//$ selector that ends with Month
		const monthLocator = page.locator('[name$="Month"]');
		const monthOptions = await monthLocator.allInnerTexts();
		const rand = getRandomInt(1, monthOptions.length);
		console.log('Selecting month:', monthOptions[rand]); // Log the option being selected

		await page
			.locator('[name$="Month"]')
			.selectOption({ label: monthOptions[rand] });
		await page
			.locator('[name="DateOfBirthYear"]')
			.selectOption('2000', { force: true });

		await page.locator('[data-val-required*="mail"]').fill(email);
		await page.locator('[name="Password"]').fill('Pass123');
		await page.locator('[name^="Confirm"]').fill('Pass123');
		await page.locator('#register-button').click();

		const registrationResult = page.locator('.page.registration-result-page');

		await expect(registrationResult).toContainText(
			'Your registration completed'
		);
	});

	// test('get started link', async ({ page }) => {
	// 	await page.goto('https://playwright.dev/');

	// 	// Click the get started link.
	// 	await page.getByRole('link', { name: 'Get started' }).click();

	// 	// Expects page to have a heading with the name of Installation.
	// 	await expect(
	// 		page.getByRole('heading', { name: 'Installation' })
	// 	).toBeVisible();
	// });
});
