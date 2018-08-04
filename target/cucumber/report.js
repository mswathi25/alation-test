$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon features",
  "description": "",
  "id": "amazon-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Collect details about book",
  "description": "",
  "id": "amazon-features;collect-details-about-book",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open Amazon webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select the category \u003ccategory\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter search text \u003csearch text\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "gather details about \u003citemno\u003e in search list",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "display gathered details about product",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "amazon-features;collect-details-about-book;",
  "rows": [
    {
      "cells": [
        "category",
        "search text",
        "itemno"
      ],
      "line": 12,
      "id": "amazon-features;collect-details-about-book;;1"
    },
    {
      "cells": [
        "Books",
        "data catalog",
        "1"
      ],
      "line": 13,
      "id": "amazon-features;collect-details-about-book;;2"
    },
    {
      "cells": [
        "Books",
        "data catalog",
        "2"
      ],
      "line": 14,
      "id": "amazon-features;collect-details-about-book;;3"
    },
    {
      "cells": [
        "Books",
        "data catalog",
        "3"
      ],
      "line": 15,
      "id": "amazon-features;collect-details-about-book;;4"
    },
    {
      "cells": [
        "Books",
        "data catalog",
        "4"
      ],
      "line": 16,
      "id": "amazon-features;collect-details-about-book;;5"
    },
    {
      "cells": [
        "Books",
        "data catalog",
        "5"
      ],
      "line": 17,
      "id": "amazon-features;collect-details-about-book;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Collect details about book",
  "description": "",
  "id": "amazon-features;collect-details-about-book;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open Amazon webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select the category Books",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter search text data catalog",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "gather details about 1 in search list",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "display gathered details about product",
  "keyword": "And "
});
formatter.match({
  "location": "AlationSteps.userOpenedPage()"
});
formatter.result({
  "duration": 24105262420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 20
    }
  ],
  "location": "AlationSteps.userSelectCategory(String)"
});
formatter.result({
  "duration": 136296273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data catalog",
      "offset": 18
    }
  ],
  "location": "AlationSteps.userEnterSearchText(String)"
});
formatter.result({
  "duration": 6567747701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "AlationSteps.gatherDeatilsaboutProduct(int)"
});
formatter.result({
  "duration": 429314631,
  "status": "passed"
});
formatter.match({
  "location": "AlationSteps.displayGatheredDetails()"
});
formatter.result({
  "duration": 749898,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Collect details about book",
  "description": "",
  "id": "amazon-features;collect-details-about-book;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open Amazon webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select the category Books",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter search text data catalog",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "gather details about 2 in search list",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "display gathered details about product",
  "keyword": "And "
});
formatter.match({
  "location": "AlationSteps.userOpenedPage()"
});
formatter.result({
  "duration": 9825526347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 20
    }
  ],
  "location": "AlationSteps.userSelectCategory(String)"
});
formatter.result({
  "duration": 160665548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data catalog",
      "offset": 18
    }
  ],
  "location": "AlationSteps.userEnterSearchText(String)"
});
formatter.result({
  "duration": 10178108192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "AlationSteps.gatherDeatilsaboutProduct(int)"
});
formatter.result({
  "duration": 436774948,
  "status": "passed"
});
formatter.match({
  "location": "AlationSteps.displayGatheredDetails()"
});
formatter.result({
  "duration": 855266,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Collect details about book",
  "description": "",
  "id": "amazon-features;collect-details-about-book;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open Amazon webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select the category Books",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter search text data catalog",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "gather details about 3 in search list",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "display gathered details about product",
  "keyword": "And "
});
formatter.match({
  "location": "AlationSteps.userOpenedPage()"
});
formatter.result({
  "duration": 12320101907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 20
    }
  ],
  "location": "AlationSteps.userSelectCategory(String)"
});
formatter.result({
  "duration": 156210294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data catalog",
      "offset": 18
    }
  ],
  "location": "AlationSteps.userEnterSearchText(String)"
});
formatter.result({
  "duration": 7638995836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "AlationSteps.gatherDeatilsaboutProduct(int)"
});
formatter.result({
  "duration": 307028990,
  "status": "passed"
});
formatter.match({
  "location": "AlationSteps.displayGatheredDetails()"
});
formatter.result({
  "duration": 1706428,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Collect details about book",
  "description": "",
  "id": "amazon-features;collect-details-about-book;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open Amazon webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select the category Books",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter search text data catalog",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "gather details about 4 in search list",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "display gathered details about product",
  "keyword": "And "
});
formatter.match({
  "location": "AlationSteps.userOpenedPage()"
});
formatter.result({
  "duration": 6858841367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 20
    }
  ],
  "location": "AlationSteps.userSelectCategory(String)"
});
formatter.result({
  "duration": 143706642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data catalog",
      "offset": 18
    }
  ],
  "location": "AlationSteps.userEnterSearchText(String)"
});
formatter.result({
  "duration": 17531297274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "AlationSteps.gatherDeatilsaboutProduct(int)"
});
formatter.result({
  "duration": 443338946,
  "status": "passed"
});
formatter.match({
  "location": "AlationSteps.displayGatheredDetails()"
});
formatter.result({
  "duration": 501528,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Collect details about book",
  "description": "",
  "id": "amazon-features;collect-details-about-book;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open Amazon webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select the category Books",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "enter search text data catalog",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "gather details about 5 in search list",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "display gathered details about product",
  "keyword": "And "
});
formatter.match({
  "location": "AlationSteps.userOpenedPage()"
});
formatter.result({
  "duration": 8367731006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 20
    }
  ],
  "location": "AlationSteps.userSelectCategory(String)"
});
formatter.result({
  "duration": 118031546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data catalog",
      "offset": 18
    }
  ],
  "location": "AlationSteps.userEnterSearchText(String)"
});
formatter.result({
  "duration": 2909875453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    }
  ],
  "location": "AlationSteps.gatherDeatilsaboutProduct(int)"
});
formatter.result({
  "duration": 297177348,
  "status": "passed"
});
formatter.match({
  "location": "AlationSteps.displayGatheredDetails()"
});
formatter.result({
  "duration": 15020188,
  "status": "passed"
});
});