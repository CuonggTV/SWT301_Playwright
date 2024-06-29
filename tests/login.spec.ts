import { test, expect } from '@playwright/test';
import TestConfig from './test-config';
import ExcelUtils from './utils/excel';
import Account from '../src/accounts/accounts.entity';



test('login', async ({ page }) => {
  const accounts: Account[] = ExcelUtils.readExcelFile('login.xlsx');

  for( const account of accounts){
    await page.goto('/');
    await page.getByRole('banner').getByRole('link', { name: 'Đăng nhập' }).click();
  
    // 1. Enter username
    await page.getByRole('textbox', { name: 'Email', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill(TestConfig.EMAIL);
  
    // 3. Enter password
    await page.getByPlaceholder('Mật khẩu').click();
    await page.getByPlaceholder('Mật khẩu').fill(TestConfig.PASSWORD);
  
    // 4. Enter
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
  };
  
});