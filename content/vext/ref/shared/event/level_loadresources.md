---
title: Level:LoadResources
---

> **Level:LoadResources**(levelName: string, gameMode: string, isDedicatedServer: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **levelName** | string |  |
| **gameMode** | string |  |
| **isDedicatedServer** | bool |  |

## Example

```lua
Events:Subscribe('Level:LoadResources', function(levelName, gameMode, isDedicatedServer)
    -- Do stuff here.
end)
```
