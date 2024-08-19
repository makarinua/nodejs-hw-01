import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        fs.writeFile(PATH_DB, '[]', 'utf-8');
    } catch (err) {
        console.log(err);
    }
};

removeAllContacts();
