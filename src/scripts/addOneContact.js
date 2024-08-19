import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
    const contact = createFakeContact(1);
    try{
        const file = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        const fullInfo = [...file, contact];
        const stringFrom = JSON.stringify(fullInfo);
        await fs.writeFile(PATH_DB, stringFrom, 'utf-8');
    } catch (err) {
        console.log(err);
    }
};

addOneContact();
