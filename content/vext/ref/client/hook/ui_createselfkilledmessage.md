---
title: UI:CreateSelfKilledMessage
---

> **UI:CreateSelfKilledMessage**(killer: [Player](/vext/ref/client/type/player), weapon: [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| [VehicleEntityData](/vext/ref/fb/vehicleentitydata) \| nil, isHeadshot: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **killer** | [Player](/vext/ref/client/type/player) |  |
| **weapon** | [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| [VehicleEntityData](/vext/ref/fb/vehicleentitydata) \| nil |  |
| **isHeadshot** | bool |  |

## Example

```lua
Hooks:Install('UI:CreateSelfKilledMessage', 1, function(hook, killer, weapon, isHeadshot)
    -- Do stuff here.
end)
```
