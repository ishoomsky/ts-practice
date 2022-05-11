// you should to implement abstract class Logger with two methods:
// the first one is: abstract - log(message): void
// the second: prindDate() which outputs date to the console
// in addition you need to create real class with method logWithDate() which first displays a date, and then an set value

abstract class Logger {
  abstract log(message: string): void;
  printDate(date: Date): void {
    this.log(date.toString());
  }
}

class SuperLogger extends Logger {
  public log(message: string) {
    console.log(message);
  }
  public logWithDate(message: string, date: Date = new Date()) {
    this.printDate(date);
    this.log(message);
  }
}

const logger = new SuperLogger();
logger.logWithDate("message");
