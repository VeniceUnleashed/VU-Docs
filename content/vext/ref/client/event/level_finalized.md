---
title: Level:Finalized
---

> **Level:Finalized**(levelName: string, gameMode: string)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **levelName** | string |  |
| **gameMode** | string |  |

## Example

```lua
Events:Subscribe('Level:Finalized', function(levelName, gameMode)
    -- Do stuff here.
end)
```
