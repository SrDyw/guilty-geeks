import LoginForm from "@/components/Form/LoginForm";
import RegisterForm from "@/components/Form/RegisterForm";
import UserInfo from "@/components/User/UserInfo";
import { AppProvider } from "@/context/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <div className="flex flex-col gap-5">
        <RegisterForm />
        <LoginForm />
      </div>
      <div>
        <UserInfo />
      </div>
    </AppProvider>
  );
}
