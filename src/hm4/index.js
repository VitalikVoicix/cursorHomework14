const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const getMyTaxes = function(salary){
    let taxInCash = this.tax*salary;
    return  `Tax is ${taxInCash}` 
}
export {ukraine,getMyTaxes};
