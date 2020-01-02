---
title: Player:Chat (Server Event)
---
## Description

## Parameters

| Type                                  | Name          | Description |
| ------------------------------------- | ------------- | ----------- |
| [Player](/vext/ref/server/class/player) | player        |             |
| int                                   | recepientMask |             |
| string                                | message       |             |

## Usage Example

``` lua
local function OnPlayerChat(player, recepientMask, message)
    -- Add your logic here
end

Events:Subscribe('Player:Chat', OnPlayerChat)
```
