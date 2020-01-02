---
title: Engine:Init (Shared Event)
---
## Description

## Parameters

| Type | Name            | Description |
| ---- | --------------- | ----------- |
| bool | dedicatedServer |             |

## Usage Example

``` lua
local function OnEngineInit(dedicatedServer)
    -- Add your logic here
end

Events:Subscribe('Engine:Init', OnEngineInit)
```
