import { revalidatePath } from "next/cache";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RedirectType } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { handleLogout } from "../api/users/users";

export const capitalizeFirstLetter = (str: string | undefined): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeAllLetters = (str: string): string => {
  if (!str) return str;
  return str.toUpperCase();
};

export const capitalizeEveryFirstLetter = (str: string): string => {
  if (!str) return str;
  const words = str.split(/\s+/);
  const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
  return capitalizedWords.join(" ");
};

export const getLastWordFromURL = (URL: string) => {
  const lastWord = URL?.split("/").filter(Boolean).pop();
  return lastWord;
};

export const truncateText = (text: string) => {
  return text.length > 10 ? `${text.substring(0, 20)}...` : text;
};

export const redirectAfterSubmit = (
  URL: string,
  router: AppRouterInstance,
  condition: any,
  setDisplayUpdateMsg: Dispatch<SetStateAction<boolean>>
) => {
  if (condition) {
    let timeout: NodeJS.Timeout | null = null;
    setDisplayUpdateMsg(true);
    timeout = setTimeout(() => {
      router.replace(URL);
      router.refresh();
      setDisplayUpdateMsg(false);
    }, 3000);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }
};

export const handleLogoutFront = (router: AppRouterInstance) => {
  if (confirm("Do you sure to want to logout!")) {
    console.log();
    handleLogout()
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const handleSubmit = async (
  state: any,
  formData: { get: (arg0: string) => any },
  handleCredentials: {
    (formData: { get: (arg0: string) => any }): Promise<
      | { user: { username: any }; error?: undefined }
      | { error: {}; user?: undefined }
    >;
    (arg0: { get: (arg0: string) => any }): any;
  },
  router: AppRouterInstance | string[],
  setErrorMessage: {
    (value: SetStateAction<string>): void;
    (arg0: string): void;
  },
  setDisplaySpinner:Dispatch<SetStateAction<boolean>>
) => {
  try {
    const response = await handleCredentials(formData);

    if (response.user) {
      setDisplaySpinner(false)
      setErrorMessage('')
      router.push("/dashboard");
    } else {
      setDisplaySpinner(false)
      setErrorMessage(
        (response.error as string) ||
          "Failed to login. Check username and password!"
      );
    }
  } catch (error) {
    setDisplaySpinner(false)
    setErrorMessage("Failed to login. Check username and password!");
  }
};
