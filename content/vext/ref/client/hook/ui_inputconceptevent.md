---
title: UI:InputConceptEvent
---

> **UI:InputConceptEvent**(eventType: [UIInputActionEventType](/vext/ref/fb/uiinputactioneventtype), action: [UIInputAction](/vext/ref/fb/uiinputaction))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **eventType** | [UIInputActionEventType](/vext/ref/fb/uiinputactioneventtype) |  |
| **action** | [UIInputAction](/vext/ref/fb/uiinputaction) |  |

## Example

```lua
Hooks:Install('UI:InputConceptEvent', 1, function(hook, eventType, action)
    -- Do stuff here.
end)
```
