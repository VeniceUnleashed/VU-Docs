---
title: VE:StateRemoved
---
## Description

## Parameters

| Type                                                                  | Name  | Description |
| --------------------------------------------------------------------- | ----- | ----------- |
| [VisualEnvironmentState](/vext/ref/cls/clt/visualenvironmentstate) | state |             |

## Usage Example

``` lua
local function OnVEStateRemoved(state)
    -- Add your logic here
end

Events:Subscribe('VE:StateRemoved', OnVEStateRemoved)
```
