"use server";

import { secureQuery } from "@/database/index.database";
import { passwordNotMatch, userDoNotExists } from "@/utils/errors";
import { requestToBodyStream } from "next/dist/server/body-streams";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { config } from "@/appconfig";

export const loginAction = async ({ name, password }) => {
  const { rows: users } = await secureQuery("SELECT * FROM mk_users");

  const matchedUser = users.filter(
    (u) => u["name"].toLowerCase() == name.toLowerCase()
  );

  if (matchedUser.length != 0) {
    const user = matchedUser[0];
    if (validatePassword(user["password"], password)) {
      const token = jwt.sign(
        {
          name: user.name,
          phone: user.phone,
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 15, // 15 dias
        },
        process.env.JWT_SECRET
      );

      cookies().set(config.cookies.user.name, token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      });

      return JSON.stringify(user);
    } else {
      return JSON.stringify(passwordNotMatch);
    }
  }
  return JSON.stringify(userDoNotExists);
};

const validatePassword = (databasePass, password) => {
  console.log(databasePass, password);
  return databasePass == password;
};
