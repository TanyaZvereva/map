export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Неправильный пароль');
    this.errors.set(2, 'Неправильное имя пользователя');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
