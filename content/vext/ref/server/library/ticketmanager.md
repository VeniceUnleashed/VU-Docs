---
title: TicketManager (Server Manager)
---
## Description

## Methods

| Type | Name                                | Parameters                                                         |
| ---- | ----------------------------------- | ------------------------------------------------------------------ |
| bool | [SetTicketCount](#setticketcount)   | [TeamId](/vext/ref/fb/teamid) **team**, int **ticketCount** |
| int  | [GetTicketCount](#getticketcount)   | [TeamId](/vext/ref/fb/teamid) **team**                      |
| int  | [GetCurrentRound](#getcurrentround) |                                                                    |
| int  | [GetRouncCount](#getroundcount)     |                                                                    |

### SetTicketCount

> bool **SetTicketCount**([TeamId](/vext/ref/fb/teamid) **team**, int **ticketCount**)

#### Parameters

| Name        | Type                                 | Description |
| ----------- | ------------------------------------ | ----------- |
| team        | [TeamId](/vext/ref/fb/teamid) |             |
| ticketCount | int                                  |             |

### GetTicketCount

> bool **GetTicketCount**([TeamId](/vext/ref/fb/teamid) **team**)

#### Parameters

| Name | Type                                 | Description |
| ---- | ------------------------------------ | ----------- |
| team | [TeamId](/vext/ref/fb/teamid) |             |

### GetCurrentRound

> int **GetCurrentRound**()

### GetRoundCount

> int **GetRoundCount**()
