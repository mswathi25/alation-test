Feature: Amazon features

Scenario Outline: Collect details about book
    Given open Amazon webpage
    And select the category <category>
    And enter search text <search text>
    And gather details about <itemno> in search list
    And display gathered details about product
    
Examples:

|category |search text  |itemno |
|Books    |data catalog |1      |
|Books    |data catalog |2      |
|Books    |data catalog |3      |
|Books    |data catalog |4      |
|Books    |data catalog |5      |

    
    