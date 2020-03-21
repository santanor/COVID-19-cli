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
    program.option('-c, --country <country>', 'Display latest information for the specified country, by code or name');
    program.parse(process.argv);
}

async function parseFlags(){
    let response = null;
    if(program.country) {
        await processCountryRoutine(program.country);
        return;
    }

    //No parameters were provided, so display the global information
    await processGlobalRoutine();
}

async function processGlobalRoutine(){
    let response = await api.getGlobalInfo();

    console.log("Latest " + chalk.bold("Global")+" information, updated on: "+chalk.bold(response.statistic_taken_at));
    console.log(utils.printGlobalInformation(response))
}

async function processCountryRoutine(country){
    let response = await api.getInformationByCountry(country);

    if(response === undefined){
        console.log("Invalid country name")
        return;
    }

    console.log("Latest information for: "+chalk.bold(response.country_name)+". Last updated on: "+chalk.bold(response.record_date))
    console.log(utils.printCountryInformation(response))
}

main();