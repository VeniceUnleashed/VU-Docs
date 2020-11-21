---
title: UI:PushScreen
---

> **UI:PushScreen**(screen: [DataContainer](/vext/ref/shared/type/datacontainer), priority: [UIGraphPriority](/vext/ref/fb/uigraphpriority), parentGraph: [DataContainer](/vext/ref/shared/type/datacontainer), stateNodeGuid: [Guid](/vext/ref/shared/type/guid) \| nil): bool

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **screen**{{< hook-ro >}} | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **priority** | [UIGraphPriority](/vext/ref/fb/uigraphpriority) |  |
| **parentGraph**{{< hook-ro >}} | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **stateNodeGuid** | [Guid](/vext/ref/shared/type/guid) \| nil |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Example

```lua
Hooks:Install('UI:PushScreen', 1, function(hook, screen, priority, parentGraph, stateNodeGuid)
    -- Do stuff here.
end)
```
