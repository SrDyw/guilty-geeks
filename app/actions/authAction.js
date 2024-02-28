"use server";

import { config } from "@/appconfig";
import { unknowError } from "@/utils/errors";
import { decode, verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const authAction = async () => {
  const cookie = cookies().get(config.cookies.user.name);

  if (cookie) {
    try {
      verify(cookie.value, process.env.JWT_SECRET);
      const payload = decode(cookie.value);

      return JSON.stringify(payload);
    } catch (e) {
      console.log(e);
      return JSON.stringify(unknowError);
    }
  }
};
