---
title: Player:RequestJoin (Server Hook)
---
## Description

Allows you to reject players from joining the server.

## Parameters

| Type                              | Name        | Description                    |
| --------------------------------- | ----------- | ------------------------------ |
| string                            | joinMode    | either `player` or `spectator` |
| [Guid](/vext/ref/cls/shr/guid) | accountGuid |                                |
| [Guid](/vext/ref/cls/shr/guid) | playerGuid  |                                |
| string                            | playerName  |                                |

## Usage Example

``` lua
Hooks:Install('Player:RequestJoin', 100, function(hook, joinMode, accountGuid, playerGuid, playerName)
    if playerName == 'NoFaTe' then
        hook:Return(false)
    end
end)
```
