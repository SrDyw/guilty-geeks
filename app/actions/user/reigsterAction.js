"use server";

import { secureQuery } from "@/database/index.database";
import { userSavingError } from "@/utils/errors";

export const registerAction = async ({ name, lastname, password, contact }) => {
  try {
    const response = secureQuery(
      "INSERT INTO mk_users(name, lastname, password, contact) VALUES($1, $2, $3, $4)",
      [name, lastname, password, contact]
    );
    
    return "Its OK";
  } catch (e) {
    console.error("Error while saving user", e);
    return JSON.stringify(userSavingError);
  }
};
