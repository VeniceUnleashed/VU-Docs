---
title: Client:LevelLoaded (Client Event)
---
## Description

## Parameters

| Type   | Name      | Description |
| ------ | --------- | ----------- |
| string | levelName |             |
| string | gameMode  |             |

## Usage Example

``` lua
local function OnClientLevelLoaded(levelName, gameMode)
    -- Add your logic here
end

Events:Subscribe('Client:LevelLoaded', OnClientLevelLoaded)
```
