---
title: FreeCam:PostFrameUpdate (Client Event)
---
## Description

## Parameters

| Type  | Name      | Description |
| ----- | --------- | ----------- |
| float | deltaTime |             |

## Usage Example

``` lua
local function OnFreeCamPostFrameUpdate(deltaTime)
    -- Add your logic here
end

Events:Subscribe('FreeCam:PostFrameUpdate', OnFreeCamPostFrameUpdate)
```
