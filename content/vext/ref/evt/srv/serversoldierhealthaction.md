---
title: ServerSoldier:HealthAction (Server Event)
---
## Description

## Parameters

| Type                                                        | Name    | Description |
| ----------------------------------------------------------- | ------- | ----------- |
| [SoldierEntity](/vext/ref/cls/srv/soldierentity)         | soldier |             |
| [HealthStateAction](/vext/ref/cls/shr/healthstateaction) | action  |             |

## Usage Example

``` lua
local function OnServerSoldierHealthAction(soldier, action)
    -- Add your logic here
end

Events:Subscribe('ServerSoldier:HealthAction', OnServerSoldierHealthAction)
```
