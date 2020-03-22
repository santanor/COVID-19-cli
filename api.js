const got = require("got");
const utils = require("./utils");

const api = got.extend({
    prefixUrl: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus',
    responseType: 'json',
    headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        // Yes, this is an API key. Fight me!
        // Nah really it's only there to auth on this public API. It's all good
        'x-rapidapi-key': '83605dac0bmsh98a2792e39ed629p16f933jsn66c6e2bb930d'
    }
});


exports.getInformationByCountry =  async function getInformationByCountry(country){
    try{
        country = utils.getCountryCode(country);
        let response = await api('latest_stat_by_country.php?country='+country);
        return response.body.latest_stat_by_country[0]
    }catch(err){}
};

exports.getGlobalInfo = async function getGlobalInfo(){
    try{
        let response = await api('worldstat.php');
        return response.body

    }catch(err){}
};

exports.casesByCountry = async function casesByCountry(){
    try{
        let response = await api("cases_by_country.php");
        return response.body;
    }catch(err){}
}