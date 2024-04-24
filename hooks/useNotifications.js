import { NotificationContext } from "@/context/NotificationContext"
import { useContext } from "react"

export const useNotifications = () => {
    const {addNotification: notificate} = useContext(NotificationContext);

    return {
        notificate
    }
}