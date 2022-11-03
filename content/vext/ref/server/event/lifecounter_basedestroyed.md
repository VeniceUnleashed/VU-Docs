---
title: LifeCounter:BaseDestroyed
---

> **LifeCounter:BaseDestroyed**(lifeCounter: [Entity](/vext/ref/shared/type/entity), isFinalBase: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **lifeCounter** | [Entity](/vext/ref/shared/type/entity) |  |
| **isFinalBase** | bool |  |

## Example

```lua
Events:Subscribe('LifeCounter:BaseDestroyed', function(lifeCounter, isFinalBase)
    -- Do stuff here.
end)
```
