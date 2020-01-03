---
title: Server:LevelLoaded
---
## Description

## Parameters

| Type   | Name         | Description |
| ------ | ------------ | ----------- |
| string | levelName    |             |
| string | gameMode     |             |
| int    | round        |             |
| int    | roundsPerMap |             |

## Usage Example

``` lua
local function OnServerLevelLoaded(levelName, gameMode, round, roundsPerMap)
    -- Add your logic here
end

Events:Subscribe('Server:LevelLoaded', OnServerLevelLoaded)
```
