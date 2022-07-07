// 1. Отправить запрос.
//http://162.55.220.72:5005/user_info_3 send
// 2. Статус код 200
pm.test("1. Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 3. Спарсить response body в json.

let jsonData = JSON.parse(responseBody);

// 4. Проверить, что name в ответе равно name s request (name вбить руками.)
pm.test("2. Name from request the same from response", function () {
    let name_is = request.data.name
pm.expect(name_is).to.eql("Dmitry");
});
//или
pm.test("3. Check include name", function () {
    pm.expect(jsonData.name).to.eql("Dmitry");
});

// 5. Проверить, что age в ответе равно age s request (age вбить руками.)
pm.test("4. Age from request the same from response", function () {
pm.expect(jsonData.age).to.eql("37");
});

// 6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)

pm.test("5. Salary from request the same from response", function () {
    let salary_is = String(jsonData.salary)
pm.expect(salary_is).to.eql("2000");
});

// 7. Спарсить request.
let request_pars = request.data

// 8. Проверить, что name в ответе равно name s request (name забрать из request.)

pm.test("6. Name from request the same from response", function () {
 let name_from_req = request_pars.name   
pm.expect(jsonData.name).to.eql(name_from_req);
});

// 9. Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test("7. Age from request the same from response", function () {
    let age_from_resp = request_pars.age
pm.expect(jsonData.age).to.eql(age_from_resp);
});

// 10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test("8. Salary from request the same from response two", function () {
  let salary_from_resp_string = String (jsonData.salary)  
pm.expect(request_pars.salary).to.include(salary_from_resp_string);
});


// 11. Вывести в консоль параметр family из response.
console.log(jsonData.family)

// 12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test("9. Salary*4", function() {
let salary_15 = jsonData.family.u_salary_1_5_year
let salary_now = request.data.salary
    pm.expect(salary_15).to.eql(salary_now*4)
})
