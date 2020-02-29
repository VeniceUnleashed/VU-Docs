---
title: UI:PushScreen
---
## Description



## Parameters

| Type                                                  | Name          | Description                    |
| ----------------------------------------------------- | ------------- | ------------------------------ |
| [DataContainer](/vext/ref/shared/class/datacontainer) | screen        |                                |
| int                                                   | graphPriority |                                |
| [DataContainer](/vext/ref/shared/class/datacontainer) | parentGraph   |                                |

## Usage Example

``` lua
Hooks:Install('UI:PushScreen', 100, function(hook, screen, graphPriority, parentGraph)
    --Add example code here...
end)
```
