# COVID-19-cli
A small CLI to track the progress of COVID-19

**This project is still very much a Work In Progress, but usable already.**

## Requirenments
* [npm](https://www.npmjs.com/get-npm)

## Installation
### From package manager
* Run `npm i @santanor/covid-19-cli -g`
### From Source
* Pull the repo
* Navigate to the `src` folder
* Run `npm install -g` to make the command available globally
* The command `covid` should be now available on your terminal

## Usage
### Global information
Run the `covid global` command to get the latest global information about COVID-19
### Top information
Run the command `covid top` to display the top 10 affected countries by total number of cases. You can specify the number of countries to show by adding the flag `-l --limit`. for example `covid top -l 20`.
### By Country
Use the parameter `country` to filter the information by country name or code. 

`covid country Spain`

`covid country IT`

`covid country China`
