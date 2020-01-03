---
title: Partition:Loaded
---
## Description

## Parameters

| Type                                                        | Name      | Description |
| ----------------------------------------------------------- | --------- | ----------- |
| [DatabasePartition](/vext/ref/shared/class/databasepartition) | partition |             |

## Usage Example

``` lua
local function OnPartitionLoaded(partition)
    -- Add your logic here
end

Events:Subscribe('Partition:Loaded', OnPartitionLoaded)
```
