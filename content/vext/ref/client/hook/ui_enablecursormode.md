---
title: UI:EnableCursorMode
---

> **UI:EnableCursorMode**(enable: bool, cursor: int)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **enable** | bool |  |
| **cursor** | int |  |

## Example

```lua
Hooks:Install('UI:EnableCursorMode', 1, function(hook, enable, cursor)
    -- Do stuff here.
end)
```
