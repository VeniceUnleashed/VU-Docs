---
title: Soldier:Spawn
---
## Description

## Parameters

| Type                                                    | Name      | Description |
| ------------------------------------------------------- | --------- | ----------- |
| [SoldierEntity](/vext/ref/server/class/soldierentity)     | soldier   |             |

## Usage Example

``` lua
local function OnSoldierSpawn(soldier)
    -- Add your logic here
end

Events:Subscribe('Soldier:Spawn', OnSoldierSpawn)
```
