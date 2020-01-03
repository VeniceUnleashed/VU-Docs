---
title: Player:Joining
---
## Description

## Parameters

| Type   | Name       | Description |
| ------ | ---------- | ----------- |
| string | playerName |             |
| string | playerGUID |             |
| string | ip         |             |

## Usage Example

``` lua
local function OnPlayerJoining(playerName, playerGUID, ip)
    -- Add your logic here
end

Events:Subscribe('Player:Joining', OnPlayerJoining)
```
