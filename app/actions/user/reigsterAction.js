"use server";

import { secureQuery } from "@/database/index.database";
import { userSavingError } from "@/utils/errors";

export const registerAction = async ({ name, lastname, password, contact }) => {
  try {
    const response = await secureQuery(
      "INSERT INTO mk_users(name, lastname, password, contact) VALUES($1, $2, $3, $4)",
      [name, lastname, password, contact]
    );

    return JSON.stringify({ message: "User registered" });
  } catch (e) {
    console.error("Error while saving user", e.code);
    return JSON.stringify({ error: userSavingError[e.code] });
  }
};
