// http://162.55.220.72:5005/object_info_3
// 1. Отправить запрос.
// 2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 3. Спарсить response body в json.
let jsonData = pm.response.json();

// 4. Спарсить request.
let request_pars = pm.request.url.query.toObject();

// 5. Проверить, что name в ответе равно name s request (name забрать из request.)
let name_response = request_pars.name
pm.test("Name in respond is correspond to request", function() {
    pm.expect(name_response).to.eql("Dmitry")
})

// 6. Проверить, что age в ответе равно age s request (age забрать из request.)
let age_response = request_pars.age 
pm.test("Age in respond is correspond to request", function() {
    pm.expect(age_response).to.eql("37")
})
// 7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
let salary_response = String(jsonData.salary);
let request_salary = request_pars.salary
pm.test("check salary in the respond correspond to request", function(){
    pm.expect(salary_response).to.eql(request_salary)
})
// 8. Вывести в консоль параметр family из response.
let family_from_response = jsonData.family;
console.log(family_from_response);

// 9. Проверить, что у параметра dog есть параметры name.
pm.test("Dog has a name in params", function(){
    pm.expect(jsonData.family.pets).to.property("dog")
})

// 10. Проверить, что у параметра dog есть параметры age.
pm.test("Dog has age", function(){
    pm.expect(jsonData.family.pets.dog).to.property("age")
})

// 11. Проверить, что параметр name имеет значение Luky.
pm.test("Name has Luky", function(){
    pm.expect(jsonData.family.pets.dog.name).to.include("Luky")
})

// 12. Проверить, что параметр age имеет значение 4.
pm.test("age of dog has '4'", function(){
    pm.expect(jsonData.family.pets.dog.age).to.eql(4)
})
