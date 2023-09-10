const notificationNumber = document.querySelector('.noti-ident span');
const markAsRead = document.querySelector('.noti-ident p');
const notify = document.querySelectorAll('.notify');
const unreadIcon = document.getElementsByTagName('i');

const markAsReadHandler = () => {
  notificationNumber.textContent = '0';
  for (noti of notify) {
    if (noti.classList.contains('read')) {
      continue;
    } else {
      noti.classList.add('read');
    }
  }
  for (icon of unreadIcon) {
    icon.className = '';
  }
};

markAsRead.addEventListener('click', markAsReadHandler);
