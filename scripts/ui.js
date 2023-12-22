// ara yuzle işlemerı alakalı ekrana bişey basacak ve htmlde aldığımız elemanları çağırdüımız dosya

//! html den cağrılan elemanlar

export const ele = {
  menu: document.querySelector('#menu'),
  nav: document.querySelector('nav'),
  mailsArea: document.querySelector('.mails'),
  modal: document.querySelector('.modal-wrapper'),
  createBtn: document.querySelector('.create'),
  closeBtn: document.querySelector('.close-modal'),
  modalForm: document.querySelector('.modal'),
  seacrhInp: document.querySelector('form #search'),

};

//! ekrana mailleri basar
// mailData: ekrana basılacak olan mailler
export const renderMails = (mailData) => {
  //maildata dizisindeki her bir mail için bir mail 
  //html' i olustur ve mail_html dizisine aktar
  const mail_html = mailData.map((mail) => {
    console.log(mail);
    return `
    <div class="mail" data-id='${mail.id}'>
    <div class= "info" >
      <input type="checkbox" />
      <i id='star' class="bi ${mail.isStared ? 'bi-star-fill' : 'bi-star'
      }"></i>
      <b>${mail.sender}</b>
  </div>
  <div class="content">
      <p class="title">${mail.title}</p>
      <p class="desc">${mail.message} </p>
  </div>
  <div class="time"> ${mail.date} </div>
  <div id='button-wrapper'>
  <button id='delete'>sil</button>
  </div>
</div >
`});

  // join dizi olarak tanımlanmış olan 
  //hml değişkenını stringe çevirir
  // html deki mail alanına oluşturduuğumuz stringi gönderme
  ele.mailsArea.innerHTML = (mail_html.join(' '));
};

// ! modal göster ve gizle
// aldığı parametre true ise modalı gösterir ve false ise gizler
export const toggleModal = (willOpen) => {
  // will open değeri true ise display, grid ise none yapıcaz
  ele.modal.style.display = willOpen === true ? 'grid' : 'none';
};




