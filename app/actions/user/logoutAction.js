'use server'
import { config } from "@/appconfig";
import { cookies } from "next/headers"

export const logoutAction = async() => {
    cookies().delete(config.cookies.user.name);
    return JSON.stringify({message: 'logout'});
}