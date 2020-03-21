# COVID-19-cli
A small CLI to track the progress of COVID-19

**This project is still very much a Work In Progress, but usable already.**

## Requirenments
* [npm](https://www.npmjs.com/get-npm)

## Installation
* Pull the repo
* Navigate to the `src` folder
* Run `npm install -g` to make the command available globally
* The command `covid` should be now available on your terminal

## Usage
### Global information
Run the `covid` command without any parameters to get the latest global information about COVID-19
### By Country
Use the parameter `-c` or `--country` to filter the information by country name or code. 

`covid -c Spain`

`covid -c IT`

`covid --country China`
