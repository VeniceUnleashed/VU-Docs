---
title: Server:RoundOver
---

> **Server:RoundOver**(roundTime: float, winningTeam: [TeamId](/vext/ref/fb/teamid))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **roundTime** | float |  |
| **winningTeam** | [TeamId](/vext/ref/fb/teamid) |  |

## Example

```lua
Events:Subscribe('Server:RoundOver', function(roundTime, winningTeam)
    -- Do stuff here.
end)
```
