---
title: Server:RoundOver (Server Event)
---
## Description

## Parameters

| Type                                 | Name        | Description |
| ------------------------------------ | ----------- | ----------- |
| float                                | roundTime   |             |
| [TeamId](/vext/ref/fb/teamid) | winningTeam |             |

## Usage Example

``` lua
local function OnServerRoundOver(roundTime, winningTeam)
    -- Add your logic here
end

Events:Subscribe('Server:RoundOver', OnServerRoundOver)
```
