import { test, expect } from '@playwright/test';
import ExcelUtils from './utils/excel';

test('test', async ({ page }) => {
  const accounts = ExcelUtils.readExcelFile('login.xlsx');
  for(const account of accounts){
    await page.goto('https://memoryzone.com.vn/');
    await page.getByRole('banner').getByRole('link', { name: 'Đăng nhập' }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('rinjin2004@gmail.com');
    await page.getByPlaceholder('Mật khẩu').click();
    await page.getByPlaceholder('Mật khẩu').fill('rinjin1412');
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await page.getByPlaceholder('Bạn cần tìm gì?').click();
    await page.getByRole('link', { name: 'ssd', exact: true }).click();
    await page.getByRole('link', { name: 'SSD Lexar NS100 512GB 2.5-' }).click();
    await page.getByRole('button', { name: 'THÊM VÀO GIỎ', exact: true }).click();
    await page.getByRole('link', { name: 'Xem giỏ hàng' }).click();
  }

});