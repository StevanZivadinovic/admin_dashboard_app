import { revalidatePath } from "next/cache";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RedirectType } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export const capitalizeFirstLetter = (str: string | undefined): string => {
    if (!str) return '';
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

  export const getLastWordFromURL = (URL:string)=>{
    const lastWord = URL?.split("/").filter(Boolean).pop();
    return lastWord;
  }

  export const truncateText = (text:string)=>{
   return text.length > 10 ? `${text.substring(0, 20)}...` : text
  }

  export const redirectAfterSubmit=(URL:string,router: AppRouterInstance, condition:any, setDisplayUpdateMsg: Dispatch<SetStateAction<boolean>> )=>{
    if (condition) {
      let timeout: NodeJS.Timeout | null = null;
       setDisplayUpdateMsg(true)
       timeout = setTimeout(() => {
        router.replace(URL); 
        router.refresh();
        setDisplayUpdateMsg(false)
      }, 3000);
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };

    }
  }

  export const handleRedirectAuthenticated=async (session:any, redirect: { (url: string, type?: RedirectType | undefined): never; (arg0: string): void; })=>{
    if(session?.user?.email !==null || session!==null){
           if(session && session?.user?.email?.length>0 && new Date(session?.expires)>new Date()){
            console.log('dashboard')
            return redirect(`/dashboard`) 
           }
           return redirect(`/login`);
         } else{
 
      }
  }
