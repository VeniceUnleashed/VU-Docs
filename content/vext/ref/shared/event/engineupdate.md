---
title: Engine:Update
---
## Description

## Parameters

| Type  | Name         | Description |
| ----- | ------------ | ----------- |
| float | deltaTime    |             |
| float | simDeltaTime |             |

## Usage Example

``` lua
local function OnEngineUpdate(deltaTime, simDeltaTime)
    -- Add your logic here
end

Events:Subscribe('Engine:Update', OnEngineUpdate)
```
