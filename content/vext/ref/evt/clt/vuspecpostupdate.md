---
title: VU:Spec:PostUpdate (Client Event)
---
## Description

## Parameters

| Type  | Name      | Description |
| ----- | --------- | ----------- |
| float | deltaTime |             |

## Usage Example

``` lua
local function OnVUSpecPostUpdate(deltaTime)
    -- Add your logic here
end

Events:Subscribe('VU:Spec:PostUpdate', OnVUSpecPostUpdate)
```
