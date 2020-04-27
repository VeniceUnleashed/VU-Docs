---
title: Engine:Update
---

> **Engine:Update**(deltaTime: float, simulationDeltaTime: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **deltaTime** | float |  |
| **simulationDeltaTime** | float |  |

## Example

```lua
Events:Subscribe('Engine:Update', function(deltaTime, simulationDeltaTime)
    -- Do stuff here.
end)
```
