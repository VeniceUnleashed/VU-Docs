---
title: Level:LoadResources (Shared Event)
---
## Description

## Parameters

| Type   | Name            | Description |
| ------ | --------------- | ----------- |
| string | levelName       |             |
| string | gameMode        |             |
| bool   | dedicatedServer |             |

## Usage Example

``` lua
local function OnLevelLoadResources(levelName, gameMode, dedicatedServer)
    -- Add your logic here
end

Events:Subscribe('Level:LoadResources', OnLevelLoadResources)
```
