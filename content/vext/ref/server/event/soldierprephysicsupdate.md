---
title: Soldier:PrePhysicsUpdate
---
## Description

## Parameters

| Type                                                | Name      | Description |
| --------------------------------------------------- | --------- | ----------- |
| [SoldierEntity](/vext/ref/server/class/soldierentity) | soldier   |             |
| float                                               | deltaTime |             |

## Usage Example

``` lua
local function OnSoldierPrePhysicsUpdate(soldier, deltaTime)
    -- Add your logic here
end

Events:Subscribe('Soldier:PrePhysicsUpdate', OnSoldierPrePhysicsUpdate)
```
