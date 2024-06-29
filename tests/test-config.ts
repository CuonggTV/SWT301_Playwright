require('dotenv').config();

export default class TestConfig {
    static readonly DEFAULT_EMAIL = process.env.DEFAULT_EMAIL || '';
    static readonly DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD || '';

}