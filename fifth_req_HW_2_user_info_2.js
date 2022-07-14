// http://162.55.220.72:5005/user_info_2
// 1. Вставить параметр salary из окружения в request
// 2. Вставить параметр age из окружения в age
// 3. Вставить параметр name из окружения в name
// 4. Отправить запрос.
// 5. Статус код 200
pm.test('status code is 200', function(){
    pm.response.to.have.status(200)
})
// 6. Спарсить response body в json.
let jsonData = pm.response.json();

// 7. Спарсить request.
let req_pars = request.data

// 8. Проверить, что json response имеет параметр start_qa_salary
pm.test('chek response have Start_qa_salary', function(){
    pm.expect(jsonData).to.property('start_qa_salary')
})
// 9. Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test('response property qa_salary_after_6_months', function(){
    pm.expect(jsonData).to.property('qa_salary_after_6_months')
})

// 10. Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test('response property qa_salary_after_12_months', function(){
    pm.expect(jsonData).to.property('qa_salary_after_12_months')
})

// 11. Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test('response property qa_salary_after_1.5_year', function(){
    pm.expect(jsonData).to.property("qa_salary_after_1.5_year")
})

// 12. Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test('response property qa_salary_after_3.5_years', function(){
    pm.expect(jsonData).to.property('qa_salary_after_3.5_years')
})

// 13. Проверить, что json response имеет параметр person
pm.test('response property person', function(){
    pm.expect(jsonData).to.property('person')
})

// 14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
pm.test('start_qa_salary from request eql response', function(){
    let string_salary = String (jsonData.start_qa_salary)
    pm.expect(string_salary).to.eql(req_pars.salary)
})

// 15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
pm.test('qa_salary_after_6_months include request', function(){
   let string_salary_6 = String (jsonData.qa_salary_after_6_months)
   console.log(typeof string_salary_6)
   let salary_x2 = req_pars.salary * 2
    pm.expect(string_salary_6).to.include(salary_x2)
})

// 16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
pm.test('qa_salary_after_12_months include salary 2.7', function(){
    let salary_12 = String (jsonData.qa_salary_after_12_months)
    let salary_x2Poin7 = req_pars.salary
    pm.expect(salary_12).to.include(salary_x2Poin7 * 2.7)
})

// 17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)
pm.test('qa_salary_after_1.5_year include salary *3.3', function(){
    let salary1poind5 = String (jsonData['qa_salary_after_1.5_year'])
    let salary_x3poind3 = req_pars.salary
    pm.expect(salary1poind5).to.include(salary_x3poind3 * 3.3)
})

// 18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)
pm.test('qa_salary_after_3.5_years include salary *3.8', function(){
    let salary_resp_3poind5 = String (jsonData['qa_salary_after_3.5_years'])
    let salary_x3poind8 = req_pars.salary
    pm.expect(salary_resp_3poind5).to.include(salary_x3poind8 * 3.8)
})

// 19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)
pm.test('person from u_name eql salary', function(){
    pm.expect(String (jsonData.person.u_name[1])).to.eql(req_pars.salary)
})

// 20. Проверить, что что параметр u_age равен age из request (age забрать из request.)
pm.test(' u_age eql age from request', function(){
    pm.expect(String (jsonData.person.u_age)).to.eql(req_pars.age)
})

// 21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test('u_salary_5_years inc salary*4.2', function(){
    pm.expect(String(jsonData.person.u_salary_5_years)).to.include(req_pars.salary * 4.2);
})

// 22. ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.
jsonData.person.u_name.forEach(el => console.log(el))