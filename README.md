Ticker Duration Changer
=======================

A small library to change ticker data into desired duration (e.g: 1 day to 3 days, 1 minute to 5 minutes, etc).

## Installation

  `npm install ticker-duration-changer`

## Usage

    var changer = require('ticker-duration-changer');

    var eodData = [
        {
              "symbol": "ASII",
              "date": "8/1/2018",
              "open": "8300",
              "high": "8325",
              "close": "8300",
              "low": "8200",
              "volume": "17178400"
            },
            {
              "symbol": "ASII",
              "date": "5/1/2018",
              "open": "8150",
              "high": "8300",
              "close": "8300",
              "low": "8125",
              "volume": "18885300"
            },
            {
              "symbol": "ASII",
              "date": "4/1/2018",
              "open": "8075",
              "high": "8225",
              "close": "8225",
              "low": "8050",
              "volume": "30604400"
            },
            {
              "symbol": "ASII",
              "date": "3/1/2018",
              "open": "8250",
              "high": "8250",
              "close": "8050",
              "low": "8000",
              "volume": "40976100"
            },
            {
              "symbol": "ASII",
              "date": "2/1/2018",
              "open": "8300",
              "high": "8400",
              "close": "8200",
              "low": "8150",
              "volume": "24661300"
            }
            ...
    ];
    
    var result = changer(eodData,1, 3); 
  
  Output should be in 3 days duration data.
    
## Notes

  * Input data array should be sorted by date & time. New data on top.
  * It is possible to modify summarizer function, by passing the following object into the function
        
        var summarizer = [
                        {
                            fieldName: "high",
                            method: "max"
                        },
                        {
                            fieldName: "low",
                            method: "min"
                        },
                        {
                            fieldName: "date",
                            method: "first"
                        },
                        {
                            fieldName: "open",
                            method: "first"
                        },
                        {
                            fieldName: "close",
                            method: "last"
                        },
                        {
                            fieldName: "volume",
                            method: "sum"
                        }
                    ];

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.