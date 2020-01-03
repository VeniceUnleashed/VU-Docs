---
title: VE:StateRemoved
---
## Description

## Parameters

| Type                                                                  | Name  | Description |
| --------------------------------------------------------------------- | ----- | ----------- |
| [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) | state |             |

## Usage Example

``` lua
local function OnVEStateRemoved(state)
    -- Add your logic here
end

Events:Subscribe('VE:StateRemoved', OnVEStateRemoved)
```
