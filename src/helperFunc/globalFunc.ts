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
    const lastWord = URL.split("/").filter(Boolean).pop();
    return lastWord;
  }