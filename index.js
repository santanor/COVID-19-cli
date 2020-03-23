#!/usr/bin/env node

const { program } = require('commander');
const api = require("./api");
const utils = require("./utils");
const chalk = require("chalk");



async function main() {
    prepareFlags();
    await parseFlags();
}

function prepareFlags(){
    program.command('global').action(executeGlobal);
    program.command('country [country]').action(executeCountry);
    program.command('top ')
        .option('-l --limit <number>', 'Limit how many countries to display. By default the limit is 10', "10").action(executeTop);
    program.parse(process.argv);
}

async function parseFlags(){
    let response = null;
    if(program.country) {
        return await processCountryRoutine(program.country);
    }

    if(program.global){
        return await processGlobalRoutine();
    }
}

async function executeTop(args){
    let limit = parseInt(args.limit);
    let response = await api.casesByCountry();

    console.log("Latest information ordered by "+chalk.bold("total cases")+". Updated on: "+chalk.bold(response.statistic_taken_at))
    let infoTable = utils.printTopCommandCountryInformation(response.countries_stat, limit);
    console.log(infoTable)
}

async function executeGlobal(){
    let response = await api.getGlobalInfo();

    console.log("Latest " + chalk.bold("Global")+" information, updated on: "+chalk.bold(response.statistic_taken_at));
    console.log(utils.printGlobalInformation(response))
}

async function executeCountry(country, args){
    let response = await api.getInformationByCountry(country);

    if(response === undefined){
        console.log("Invalid country name")
        return;
    }

    console.log("Latest information for: "+chalk.bold(response.country_name)+". Last updated on: "+chalk.bold(response.record_date))
    console.log(utils.printCountryInformation(response))

}


main();