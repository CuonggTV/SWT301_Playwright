import xlsx from 'node-xlsx';
import path from 'path';
import Account from '../../src/accounts/accounts.entity';
// Or var xlsx = require('node-xlsx').default;

export default class ExcelUtils {
    static readExcelFile(fileName: string) {
        const filePath = path.join(__dirname, '..', 'test-cases', fileName)
        const workSheets = xlsx.parse(filePath);
        const loginTestsCase: Account[] = [];
        ;
        workSheets.forEach(rows => {
            for (let i = 0; i < rows.data.length; i++) {
                let account: Account = new Account();
                account.email = rows.data[i][1];
                account.password = rows.data[i][2];
                account.name = rows.data[i][3];
                loginTestsCase.push(account)
            }

        });
        return loginTestsCase;
    }
}

// Parse a buffer
// Parse a file