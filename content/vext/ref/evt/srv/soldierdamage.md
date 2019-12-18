---
title: Soldier:Damage (Server Event)
---
## Description

## Parameters

| Type                                                    | Name      | Description |
| ------------------------------------------------------- | --------- | ----------- |
| [SoldierEntity](/vext/ref/cls/srv/soldierentity)     | soldier   |             |
| [DamageInfo](/vext/ref/cls/srv/damageinfo)           | info      |             |
| [DamageGiverInfo](/vext/ref/cls/srv/damagegiverinfo) | giverInfo |             |

## Usage Example

``` lua
local function OnSoldierDamage(soldier, info, giverInfo)
    -- Add your logic here
end

Events:Subscribe('Soldier:Damage', OnSoldierDamage)
```
