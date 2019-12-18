---
title: Player:SpawnOnSelectedSpawnPoint (Server Event)
---
## Description

## Parameters

| Type                                  | Name   | Description |
| ------------------------------------- | ------ | ----------- |
| [Player](/vext/ref/cls/srv/player) | player |             |

## Usage Example

``` lua
local function OnPlayerSpawnOnSelectedSpawnPoint(player)
    -- Add your logic here
end

Events:Subscribe('Player:SpawnOnSelectedSpawnPoint', OnPlayerSpawnOnSelectedSpawnPoint)
```
