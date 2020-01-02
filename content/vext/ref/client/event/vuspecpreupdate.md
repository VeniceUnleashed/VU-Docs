---
title: VU:Spec:PreUpdate (Client Event)
---
## Description

## Parameters

| Type  | Name      | Description |
| ----- | --------- | ----------- |
| float | deltaTime |             |

## Usage Example

``` lua
local function OnVUSpecPreUpdate(deltaTime)
    -- Add your logic here
end

Events:Subscribe('VU:Spec:PreUpdate', OnVUSpecPreUpdate)
```
