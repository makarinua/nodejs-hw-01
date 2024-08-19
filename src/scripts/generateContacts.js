import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
    const result = [];
    for(let i = 0; i<number; i++) {
        result.push(createFakeContact());
    }
    try {
        const file = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
        const fullInfo = [...file, ...result];
        const stringFrom = JSON.stringify(fullInfo);
        await fs.writeFile(PATH_DB, stringFrom, 'utf-8');
    } catch (err) {
        console.log(err);
    }
};

generateContacts(3);
