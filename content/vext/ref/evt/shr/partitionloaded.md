---
title: Partition:Loaded (Shared Event)
---
## Description

## Parameters

| Type                                                        | Name      | Description |
| ----------------------------------------------------------- | --------- | ----------- |
| [DatabasePartition](/vext/ref/cls/shr/databasepartition) | partition |             |

## Usage Example

``` lua
local function OnPartitionLoaded(partition)
    -- Add your logic here
end

Events:Subscribe('Partition:Loaded', OnPartitionLoaded)
```
