---
title: Terrain:Load
---

> **Terrain:Load**(assetName: string)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **assetName**{{< hook-ro >}} | string |  |

## Example

```lua
Hooks:Install('Terrain:Load', 1, function(hook, assetName)
    -- Do stuff here.
end)
```
