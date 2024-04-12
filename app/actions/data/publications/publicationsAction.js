'use server'
import { secureQuery } from "@/database/index.database";

export const getPublicactionsAction = async() => {
    return (await secureQuery("SELECT * FROM mk_publicacion")).rows;
}