
import { ele, renderMails, toggleModal } from './scripts/ui.js';
import { getDate } from './scripts/helpers.js';


//* Local storage'dan verileri al ve obje formatına çevir
//projede mail verisi olarak hep bunu kullanacagız diziyi
// güncellendiğinde local-storage ıda güncelle
const strMails = localStorage.getItem('mails') || [];
let mailData = JSON.parse(strMails);

// 1 navbar için açılma ve kapanma özelliği
//hamburgermenu iconuna tıklanma özelliğini izle
// tıklanınca nav menusunda hide clası ekle
//zaten kapalıyken tıklarsa hide clasını kaldır
ele.menu.addEventListener('click', () => {
  ele.nav.classList.toggle('hide');
});
// 2 listeleme özelliği
// kullanıcının projeye girme yanı sayfann yuklenmesı anı..
//DOMContentLoaded > tarayıcıdaki html in yüklenmesinin bitmesi
// ekran boyutu 1200 px altında ise navbar kapalı gelsin
document.addEventListener('DOMContentLoaded', () => {
  renderMails(mailData);

  if(window.innerWidth < 1200) { 
  ele.nav.classList.add('hide');
}
});

// 3) Modal açma kapama özelliği
// oluitur butonuna basınca modal açılacak ( display:grid)
// çarpı buutonuna veya dışarıya basınca modal kapanacak( display:none) 
ele.createBtn.addEventListener('click', () => toggleModal(true));
ele.closeBtn.addEventListener('click', () => toggleModal(false));

ele.modal.addEventListener('click', (e) => {
  // eğerki tıklanılan elemanın clasında modal-wrapper varsa
  if (e.target.classList.contains('modal-wrapper')) {
    toggleModal(false);
  }
})

//4) mail atma özelliği
// açılan modaldaki formun gönderilme olayını izliycez
// eger bütün inputlar doluysa yeni mail oluştur
// değilse kullanıcıya uyarı ver

ele.modalForm.addEventListener('submit', (e) => {
  // sayfayı yenilemeyi engelle 
  e.preventDefault();

  // formdaki inputların verileirne erişme
  const receiver = e.target[1].value;
  const title = e.target[2].value;
  const message = e.target[3].value;

  // egerki inputlar boşsa uyarı gönder
  if (receiver === '' || title === '' || message === '') {
    alert('lütfen bütün alanları dolrurun');
  } else {
    // diziye eklemek için mail objesi oluştur
    const newMail = {
      id: new Date().getTime(),
      sender: 'Özlem',
      receiver: receiver,
      title: title,
      message: message,
      date: 'getDate()'
    };

    // yeni maili mailler diizisine kaydettik ardındab 
    mailData.unshift(newMail);

   // mailler dizisinin son halini local-storage'a kaydettik
    localStorage.setItem('mails',JSON.stringify(mailData));

   // mailler dizisinin son halini ekrana bas
    renderMails(mailData);

    // modalı kapat
    toggleModal(false);


  }
});

 //5) mail silme özelliği
 const handleClick = (e) => {
  const mail = e.target.closest('.mail');
  const mailId = mail.dataset.id;

  console.log(mailId);
  
  // tıklanılan elemanın id si delete ise maili sil
  if(
    e.target.id ==='delete' &&
    confirm ('Maili silmek istiyormusunuz?')){
   //id si sileceğimiz eleman eşit olmayan elemanları filtrele
   mailData = mailData.filter((mail) => mail.id !== Number(mailId));

   // locali guncelle
  localStorage.setItem('mails',JSON.stringify(mailData));

   //maili hotmailden kaldır
   mail.remove();
  }
 
  // tıklanılan eleman yıldız ise maili like'la

  if(e.target.id === 'star') { 
  //1) id sini bildiğimiz mailin bütün bilgilerini al
  const found = mailData.find((item) => item.id === Number (mailId));
  
  //2) mailin is_stared 'yıldızlı' değerini tersine cevir
  found.isStared = !found.isStared;
  
  //4) localstorage güncelle
  localStorage.setItem ('mails', JSON.stringify(mailData));
  
  //5) arayuzu güncelle
 renderMails(mailData);
}
};

 ele.mailsArea.addEventListener('click', handleClick);

//6 navigazyon menusu aktifliği
 ele.nav.addEventListener('click', (e) => {
  console.log(e.target.id);

  if(e.target.id === 'cat2') {
// dizi içerisinden sadece yıldızlı olanları al ve ekrana bas
const filtred = mailData.filter((mail) => mail.isStared)
renderMails(filtred);
 } else{
  // bütün diziyi ekrana bas
  renderMails(mailData);
 }

 });





