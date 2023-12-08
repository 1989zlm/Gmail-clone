  import {mailData} from './scripts/constant.js'
  import {ele, renderMails} from './scripts/ui.js';
 

// 1 navbar için açılma ve kapanma özelliği
//hamburgermenu iconuna tıklanma özelliğini izle
// tıklanınca nav menusunda hide clası ekle
//zaten kapalıyken tıklarsa hide clasını kaldır
ele.menu.addEventListener('click', () => {
    ele.nav.classList.toggle('hide');
});
// 2 listeleme özelliği
// kullanıcının projeye girme yanı sayfann yuklenmesı anı..
document.addEventListener('DOMContentLoaded', () => {
    renderMails(mailData);
});




