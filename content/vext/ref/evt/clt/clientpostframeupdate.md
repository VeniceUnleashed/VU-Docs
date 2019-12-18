---
title: Client:PostFrameUpdate (Client Event)
---
## Description

## Parameters

| Type  | Name      | Description |
| ----- | --------- | ----------- |
| float | deltaTime |             |

## Usage Example

``` lua
local function OnClientPostFrameUpdate(deltaTime)
    -- Add your logic here
end

Events:Subscribe('Client:PostFrameUpdate', OnClientPostFrameUpdate)
```
