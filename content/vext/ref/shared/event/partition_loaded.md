---
title: Partition:Loaded
---

> **Partition:Loaded**(partition: [DatabasePartition](/vext/ref/shared/type/databasepartition))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partition** | [DatabasePartition](/vext/ref/shared/type/databasepartition) |  |

## Example

```lua
Events:Subscribe('Partition:Loaded', function(partition)
    -- Do stuff here.
end)
```
