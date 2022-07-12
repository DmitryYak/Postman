// 1. Отправить запрос.

// 2. Статус код 200
pm.test('status code is 200', function(){
    pm.response.to.have.status(200)
})

// 3. Спарсить response body в json.
let jsonData = pm.response.json();

// 4. Спарсить request.
let request_pars = pm.request.url.query.toObject();

// 5. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Name in response equals in the request", function(){
    let name_from_resp = jsonData.name 
    pm.expect(name_from_resp).to.eql(request_pars.name)
})

// 6. Проверить, что age в ответе равно age из request (age забрать из request.)
pm.test("age in response equals in the request", function(){
    let age_response = String (jsonData.age)
    pm.expect(age_response).to.eql(request_pars.age)
})

// 7. Вывести в консоль параметр salary из request.
console.log(request_pars.salary)

// 8. Вывести в консоль параметр salary из response.
console.log(jsonData.salary)

// 9. Вывести в консоль 0-й элемент параметра salary из response.
console.log(jsonData.salary[0])

// 10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.
console.log(jsonData.salary[1])

// 11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.
console.log(jsonData.salary[2])

// 12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)
pm.test("Chek salary in the response the same in request 0 el", function(){
    let salary_0_el = String (jsonData.salary[0])
    pm.expect(salary_0_el).to.eql(request_pars.salary)
})

// 13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)
pm.test("chek the first el in the salary eql salary*2 in request", function(){
    let salary_x2_req = request_pars.salary * 2
    let first_el_salary = String (jsonData.salary[1]);
    pm.expect(first_el_salary).to.include(salary_x2_req)
})

// 14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)

pm.test("chek the second el in the salary eql salary *3 in request", function(){
    let second_el_salary_resp = String (jsonData.salary[2]);
    let salary_x3_req = request_pars.salary * 3;
    pm.expect(second_el_salary_resp).to.include(salary_x3_req);
})
// 15. Создать в окружении переменную name
// http://162.55.220.72:5005/object_info_4?name={{name}}&age=37&salary=2000

// 16. Создать в окружении переменную age
//http://162.55.220.72:5005/object_info_4?name={{name}}&age={{age}}&salary=2000

// 17. Создать в окружении переменную salary
// http://162.55.220.72:5005/object_info_4?name={{name}}&age={{age}}&salary={{salary}}

// 18. Передать в окружение переменную name
// 19. Передать в окружение переменную age
// 20. Передать в окружение переменную salary

// 21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.
jsonData.salary.forEach(sal => console.log(sal))