---
title: UI:InputConceptEvent
---
## Description



## Parameters

| Type                                                      | Name      | Description                    |
| ----------------------------------------------------------------------- | --------- | ------------------------------ |
| [UIInputActionEventType](/vext/ref/fb/class/uiinputactioneventtype)     | eventType |                                |
| [UIInputAction](/vext/ref/fb/class/uiinputaction)                       | action    |                                |

## Usage Example

``` lua
Hooks:Install('UI:InputConceptEvent', 100, function(hook, eventType, action)
    --Add example code here...
end)
```
