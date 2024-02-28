"use server";

import { secureQuery } from "@/database/index.database";

export const registerAction = async ({ name, lastname, password, phone }) => {
  try {
    const response = secureQuery(
      "INSERT INTO mk_users(name, lastname, password, phone) VALUES($1, $2, $3, $4)",
      [name, lastname, password, phone]
    );
    console.log('User saving successfuly');
    return "Its OK";
  } catch (e) {
    console.error('Error while saving user', e);
    return "Error while saving user";
  }

};
