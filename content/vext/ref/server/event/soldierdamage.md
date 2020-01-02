---
title: Soldier:Damage (Server Event)
---
## Description

## Parameters

| Type                                                    | Name      | Description |
| ------------------------------------------------------- | --------- | ----------- |
| [SoldierEntity](/vext/ref/server/class/soldierentity)     | soldier   |             |
| [DamageInfo](/vext/ref/server/class/damageinfo)           | info      |             |
| [DamageGiverInfo](/vext/ref/server/class/damagegiverinfo) | giverInfo |             |

## Usage Example

``` lua
local function OnSoldierDamage(soldier, info, giverInfo)
    -- Add your logic here
end

Events:Subscribe('Soldier:Damage', OnSoldierDamage)
```
