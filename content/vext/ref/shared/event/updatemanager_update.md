---
title: UpdateManager:Update
---

> **UpdateManager:Update**(deltaTime: float, updatePass: [UpdatePass](/vext/ref/fb/updatepass))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **deltaTime** | float |  |
| **updatePass** | [UpdatePass](/vext/ref/fb/updatepass) |  |

## Example

```lua
Events:Subscribe('UpdateManager:Update', function(deltaTime, updatePass)
    -- Do stuff here.
end)
```
