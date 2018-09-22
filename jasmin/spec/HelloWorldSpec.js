describe("Austria", function(){

       // what it should do
       it("This function will return the value Austria",function(){
               //expect something
               expect(alculateInsurance("Austria")).toEqual("Austria");
       });

});

describe("calculateInsurancePerCountry", function(){

       // what it should do
       it("This function will return the value of horse_power, age, country",function(){
               //expect something
               expect(calculateInsurancePerCountry(200,5,"Austria")).toEqual(363);
       });

});
