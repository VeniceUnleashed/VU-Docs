---
title: VE:StateAdded
---
## Description

## Parameters

| Type                                                                  | Name  | Description |
| --------------------------------------------------------------------- | ----- | ----------- |
| [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) | state |             |

## Usage Example

``` lua
local function OnVEStateAdded(state)
    -- Add your logic here
end

Events:Subscribe('VE:StateAdded', OnVEStateAdded)
```
