---
title: UI:CreateKilledOtherMessage
---

> **UI:CreateKilledOtherMessage**(victim: [Player](/vext/ref/client/type/player), weapon: [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| [VehicleEntityData](/vext/ref/fb/vehicleentitydata) \| nil, isHeadshot: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **victim** | [Player](/vext/ref/client/type/player) |  |
| **weapon** | [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| [VehicleEntityData](/vext/ref/fb/vehicleentitydata) \| nil |  |
| **isHeadshot** | bool |  |

## Example

```lua
Hooks:Install('UI:CreateKilledOtherMessage', 1, function(hook, victim, weapon, isHeadshot)
    -- Do stuff here.
end)
```
