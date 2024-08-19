import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const file = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        return file.length;
    } catch (err) {
        console.log(err);
    }
};

console.log(await countContacts());
