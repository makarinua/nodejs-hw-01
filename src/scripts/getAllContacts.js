import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try{
        const file = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        return file;
    } catch (err) {
        console.log(err);
    }
};

console.log(await getAllContacts());
