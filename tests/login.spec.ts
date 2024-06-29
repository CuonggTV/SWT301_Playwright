import { test, expect } from '@playwright/test';
import ExcelUtils from './utils/excel';
import Account from '../src/accounts/accounts.entity';
import LoginXpath from './xpath/login.xpath';
import BannerXpath from './xpath/banner.xpath';
import AccountXpath from './xpath/account.xpath';

test('login', async ({ page }) => {
  const accounts: Account[] = ExcelUtils.readExcelFile('login.xlsx');

  for( const account of accounts){
    await page.goto('/');
    await page.locator(BannerXpath.LOGIN_URL).click();
  
    // 1. Enter email
    await page.locator(LoginXpath.EMAIL).click();
    await page.locator(LoginXpath.EMAIL).fill(account.email);
  
    // 3. Enter password
    await page.locator(LoginXpath.PASSWORD).click();
    await page.locator(LoginXpath.PASSWORD).fill(account.password);
  
    // 4. Submit
    await page.locator(LoginXpath.SUBMIT_BUTTON).click();

    // 5. Check is login into account page
    await expect(page).toHaveURL(AccountXpath.URL);
  };
  
});