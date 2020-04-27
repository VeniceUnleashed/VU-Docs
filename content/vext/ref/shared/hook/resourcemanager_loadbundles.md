---
title: ResourceManager:LoadBundles
---

> **ResourceManager:LoadBundles**(bundles: string{}, compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **bundles** | string{} |  |
| **compartment** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |

## Example

```lua
Hooks:Install('ResourceManager:LoadBundles', 1, function(hook, bundles, compartment)
    -- Do stuff here.
end)
```
