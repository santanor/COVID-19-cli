const { getCode, getName } = require('country-list');
const chalk = require('chalk');


/**
 * Anything can be provided, name or country code. This function will filter that and always return the name
 * @param nameOrCode
 */
exports.getCountryCode = function getCountryCode(nameOrCode){
    //It's already the code
   if(getCode(nameOrCode) !== undefined){
        return nameOrCode
   }

   let name = getName(nameOrCode);
   if(name !== undefined){
       return name;
   }

   return nameOrCode;
};

exports.printCountryInformation = function printCountry(info){
    try{
        let result = "Total cases: " + chalk.blue(info.total_cases);
        result += ", New Cases: " + chalk.yellow(info.new_cases);
        result += ", Active Cases: " + chalk.yellow(info.active_cases);
        result += ", Total Deaths: " + chalk.red(info.total_deaths);
        result += ", New Deaths: " +chalk.red(info.new_deaths);
        result += ", Total Recovered: " +chalk.green(info.total_recovered);

        return result;

    }catch(err){
        return err
    }
};

exports.printGlobalInformation = function printGlobalInformation(info){
    try{
        let result = "Total cases: " + chalk.blue(info.total_cases);
        result += ", New Cases: " + chalk.yellow(info.new_cases);
        result += ", Total Deaths: " + chalk.red(info.total_deaths);
        result += ", New Deaths: " +chalk.red(info.new_deaths);
        result += ", Total Recovered: " +chalk.green(info.total_recovered);

        return result;

    }catch(err){
        return err
    }
}