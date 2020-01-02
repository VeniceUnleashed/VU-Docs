---
title: Client:LevelFinalized (Client Event)
---
## Description

## Parameters

| Type   | Name      | Description |
| ------ | --------- | ----------- |
| string | levelName |             |
| string | gameMode  |             |

## Usage Example

``` lua
local function OnClientLevelFinalized(levelName, gameMode)
    -- Add your logic here
end

Events:Subscribe('Client:LevelFinalized', OnClientLevelFinalized)
```
