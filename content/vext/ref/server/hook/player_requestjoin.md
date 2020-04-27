---
title: Player:RequestJoin
---

> **Player:RequestJoin**(joinMode: string, accountGuid: [Guid](/vext/ref/shared/type/guid), playerGuid: [Guid](/vext/ref/shared/type/guid), playerName: string): bool

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **joinMode**{{< hook-ro >}} | string |  |
| **accountGuid**{{< hook-ro >}} | [Guid](/vext/ref/shared/type/guid) |  |
| **playerGuid**{{< hook-ro >}} | [Guid](/vext/ref/shared/type/guid) |  |
| **playerName**{{< hook-ro >}} | string |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Example

```lua
Hooks:Install('Player:RequestJoin', 1, function(hook, joinMode, accountGuid, playerGuid, playerName)
    -- Do stuff here.
end)
```
