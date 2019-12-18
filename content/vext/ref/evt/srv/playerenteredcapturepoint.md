---
title: Player:EnteredCapturePoint (Server Event)
---
## Description

## Parameters

| Type                                  | Name         | Description |
| ------------------------------------- | ------------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player       |             |
| [Entity](/vext/ref/cls/shr/entity) | capturePoint |             |

## Usage Example

``` lua
local function OnPlayerEnteredCapturePoint(player, capturePoint)
    -- Add your logic here
end

Events:Subscribe('Player:EnteredCapturePoint', OnPlayerEnteredCapturePoint)
```
