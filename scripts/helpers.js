// yardımcı fonksiyonları tutmaya yarayan
import { month_tr } from './constant.js';

// buugünün tarihini gun ay ismi cinsinden geri döndurur
export const getDate = () => {
    const date = new Date ();
  
    const day = date.getDate() ;
    const monthIndex = date.getMonth ();
  
    
    return day + ' ' + month_tr [monthIndex];
  };
 
  
  
  