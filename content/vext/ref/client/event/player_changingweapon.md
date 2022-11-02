---
title: Player:ChangingWeapon
---

> **Player:ChangingWeapon**(player: [Player](/vext/ref/client/type/player), oldSlot: int, newSlot: int, playerTriggeredSwitch: bool, quickSwitch: bool, automaticSwitchBack: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/client/type/player) |  |
| **oldSlot** | int |  |
| **newSlot** | int |  |
| **playerTriggeredSwitch** | bool |  |
| **quickSwitch** | bool |  |
| **automaticSwitchBack** | bool |  |

## Example

```lua
Events:Subscribe('Player:ChangingWeapon', function(player, oldSlot, newSlot, playerTriggeredSwitch, quickSwitch, automaticSwitchBack)
    -- Do stuff here.
end)
```
