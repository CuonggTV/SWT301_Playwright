import { test, expect } from '@playwright/test';
import ExcelUtils from './utils/excel';
import BannerXpath from './xpath/banner.xpath';
import LoginXpath from './xpath/login.xpath';
import TestConfig from './test-config';
import SearchResultXpath from './xpath/search-result.xpath';
import BuyItemXpath from './xpath/buy-item.xpath';
import CartXpath from './xpath/cart.spect';

test('login', async ({ page }) => {

  await page.goto('/');
  await page.locator(BannerXpath.LOGIN_URL).click();

  // 1. Enter email
  await page.locator(LoginXpath.EMAIL).click();
  await page.locator(LoginXpath.EMAIL).fill(TestConfig.DEFAULT_EMAIL);

  // 3. Enter password
  await page.locator(LoginXpath.PASSWORD).click();
  await page.locator(LoginXpath.PASSWORD).fill(TestConfig.DEFAULT_PASSWORD);

  // 4. Submit
  await page.locator(LoginXpath.SUBMIT_BUTTON).click();

  // 5. Search first item 
  await page.locator(BannerXpath.SEARCH).click();
  await page.locator(BannerXpath.SEARCH).fill('ram');
  await page.locator(SearchResultXpath.FIRST_ITEM).click();

  // 6. Add to cart
  await page.locator(BuyItemXpath.ADD_TO_CART).click();

  // 7. View in cart
  await page.locator(BannerXpath.CART).click();

  // Result
  await expect(page.locator(CartXpath.CHECK_OUT)).toBeVisible()

});
