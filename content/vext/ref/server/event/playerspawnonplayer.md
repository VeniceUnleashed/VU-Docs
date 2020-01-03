---
title: Player:SpawnOnPlayer
---
## Description

## Parameters

| Type                                  | Name            | Description |
| ------------------------------------- | --------------- | ----------- |
| [Player](/vext/ref/server/class/player) | player          |             |
| [Player](/vext/ref/server/class/player) | playerToSpawnOn |             |

## Usage Example

``` lua
local function OnPlayerSpawnOnPlayer(player, playerToSpawnOn)
    -- Add your logic here
end

Events:Subscribe('Player:SpawnOnPlayer', OnPlayerSpawnOnPlayer)
```
