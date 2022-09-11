---
title: ResourceManager:ClearCompartment
---

> **ResourceManager:ClearCompartment**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **compartment** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |

## Example

```lua
Events:Subscribe('ResourceManager:ClearCompartment', function(compartment)
    -- Do stuff here.
end)
```
