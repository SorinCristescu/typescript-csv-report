import { HtmlReport } from './reports/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reports/ConsoleReport';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';



const reader = new MatchReader('football.csv')

reader.read();

// const summary = new Summary(
//   new WinsAnalysis('Man City'),
//   new ConsoleReport()
// )

const summary = new Summary(
  new WinsAnalysis('Man City'),
  new HtmlReport()
)

summary.buildAndPrintReport(reader.data)




 




