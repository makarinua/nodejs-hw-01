import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const file = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        if(file.length !== 0) {
            file.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(file), 'utf-8');
        }
    } catch (err) {
        console.log(err);
    }
};

removeLastContact();
