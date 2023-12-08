// ara yuzle işlemerı alakalı ekrana bişey basacak ve htmlde aldığımız elemanları çağırdüımız dosya

//! html den cağrılan elemanlar

export const ele = {
  menu: document.querySelector('#menu'),
  nav: document.querySelector('nav'),
  mailsArea: document.querySelector('.mails'),
};

//! ekrana mailleri basar
// mailData: ekrana basılacak olan mailler
export const renderMails = (mailData) => {
  //maildata dizisindeki her bir mail için bir mail 
  //html' i olustur ve mail_html dizisine aktar
 const mail_html = mailData.map((mail) => { 
  console.log(mail);  
  return `
    <div class="mail">
    <div class= "info" >
      <input type="checkbox" />
      <i class="bi bi-star-fill"></i>
      <b>${mail.sender}</b>
  </div>
  <div class="content">
      <p class="title">${mail.title}</p>
      <p class="desc">${mail.message} </p>
  </div>
  <div class="time"> ${mail.date} </div>
  <button>sil</button>
</div >
`});

// join dizi olarak tanımlanmış olan 
//hml değişkenını stringe çevirir
// html deki mail alanına oluşturduuğumuz stringi gönderme
ele.mailsArea.innerHTML = (mail_html.join(' '));
};