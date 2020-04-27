---
title: Client:UpdateClientGameViewTransform
---

> **Client:UpdateClientGameViewTransform**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

## Example

```lua
Hooks:Install('Client:UpdateClientGameViewTransform', 1, function(hook, transform)
    -- Do stuff here.
end)
```
