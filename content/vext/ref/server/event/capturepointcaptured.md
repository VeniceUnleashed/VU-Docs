---
title: CapturePoint:Captured
---
## Description

## Parameters

| Type                                  | Name         | Description |
| ------------------------------------- | ------------ | ----------- |
| [Entity](/vext/ref/shared/class/entity) | capturePoint |             |

## Usage Example

``` lua
local function OnCapturePointCaptured(capturePoint)
    -- Add your logic here
end

Events:Subscribe('CapturePoint:Captured', OnCapturePointCaptured)
```
