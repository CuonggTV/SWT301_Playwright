export default class AccountXpath { 
    static readonly URL = 'https://memoryzone.com.vn/account';

    static readonly NAME_VALUE = '//*[@id="template-customers/account"]/section[2]/div/div/div[2]/div/p[1]/text()'

    static readonly EMAIL_VALUE = '//*[@id="template-customers/account"]/section[2]/div/div/div[2]/div/p[3]/text()'

    static readonly PHONE_VALUE = '//*[@id="template-customers/account"]/section[2]/div/div/div[2]/div/p[3]/text()'

    static readonly ADDRESS_VALUE = '//*[@id="template-customers/account"]/section[2]/div/div/div[2]/div/p[4]/text()'
}
