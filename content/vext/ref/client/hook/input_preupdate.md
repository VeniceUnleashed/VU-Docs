---
title: Input:PreUpdate
---

> **Input:PreUpdate**(cache: [ConceptCache](/vext/ref/client/type/conceptcache), deltaTime: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **cache** | [ConceptCache](/vext/ref/client/type/conceptcache) |  |
| **deltaTime** | float |  |

## Example

```lua
Hooks:Install('Input:PreUpdate', 1, function(hook, cache, deltaTime)
    -- Do stuff here.
end)
```
