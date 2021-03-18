"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReport_1 = require("./reports/HtmlReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
// import { ConsoleReport } from './reports/ConsoleReport';
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
// const summary = new Summary(
//   new WinsAnalysis('Man City'),
//   new ConsoleReport()
// )
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man City'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(reader.data);
