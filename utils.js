const { getCode, getName } = require('country-list');
const chalk = require('chalk');
const Table = require('cli-table');


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

exports.printTopCommandCountryInformation = function printTopCommandCountry(allCountries, limit){
    try{
        let table = new Table({
            chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
                , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
                , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
                , 'right': '' , 'right-mid': '' , 'middle': '' }
        });

        for(let i = 0; i < limit; i++){
            let info = allCountries[i];
            let mortalityRate = (parseInt(info.deaths.replace(/,/g, ''))/parseInt(info.cases.replace(/,/g, '')))*100

            table.push([
                chalk.magenta(info.country_name),
                "Total Cases:" + chalk.blue(info.cases),
                "New Cases: " + chalk.yellow(info.new_cases),
                "Active Cases: " + chalk.yellow(info.active_cases),
                "Total Deaths: " + chalk.red(info.deaths),
                "New Deaths: " +chalk.red(info.new_deaths),
                "Mortality Rate: "+chalk.red(mortalityRate.toFixed(2)+"%"),
                "Total Recovered: " +chalk.green(info.total_recovered)
            ])
        }

        return table.toString();

    }catch(err){
        return err
    }
}

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