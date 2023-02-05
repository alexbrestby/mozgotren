import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement, isUserCheck } from '../utils/utils';

export default class ProfilePage {
  static draw(): void {
    const header = new HeaderView();
    header.draw();
    ProfilePage.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('trenagors-main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `<div class="container">
      <div class="profile-title-wrapper">
        <h2 class="profile-title">Добро пожаловать, ${isUserCheck()}</h2>
        <p>Это профиль пользователя.<br>Что сюда можно записать (рейтинг, сыгранные игры, прогресс итд.) - думаем, предлагаем...</p>
      </div>
    </div>`;
  }
}