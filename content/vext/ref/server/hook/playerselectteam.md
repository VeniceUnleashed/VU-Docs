---
title: Player:SelectTeam
---
## Description



## Parameters

| Type                                    | Name   | Description                    |
| --------------------------------------- | ------ | ------------------------------ |
| [Player](/vext/ref/server/class/player) | player |                                |
| [TeamID](/vext/ref/fb/class/teamid)     | team   |                                |

## Usage Example

``` lua
Hooks:Install('Player:SelectTeam', 100, function(hook, player, team)
    --Add example code here...
end)
```
