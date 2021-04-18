import ErrorRepository from "../app"
test("Тест создания error repository", () => {
    const error = new ErrorRepository()
    expect(error.errors.size).toBe(2)
})
test("Должен получить текст ошибки", () => {
    const error = new ErrorRepository()
    expect(error.translate(1)).toBe('Неправильный пароль')
    expect(error.translate(2)).toBe('Неправильное имя пользователя')
    expect(error.translate(3)).toBe('Unknown error')
})