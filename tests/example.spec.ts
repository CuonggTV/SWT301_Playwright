import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://memoryzone.com.vn/');
  await page.getByRole('banner').getByRole('link', { name: 'Đăng nhập' }).click();

  // 1. Enter username
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('rinjin2004@gmail.com');

  // 3. Enter password
  await page.getByPlaceholder('Mật khẩu').click();
  await page.getByPlaceholder('Mật khẩu').fill('rinjin1412');

  // 4. Enter
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
});