import { faker } from "@faker-js/faker";

export const createFakeContact = () => ({
  id: faker.datatype.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  job: faker.person.jobTitle(),
});
