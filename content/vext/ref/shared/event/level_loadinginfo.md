---
title: Level:LoadingInfo
---

> **Level:LoadingInfo**(screenInfo: string)

Used to show information about what the engine is doing while a level is loading.

Server loading states info:
```
Creating level
Loading terrain
Registering entity resources
Creating material grid
Creating physics manager
Spawning level
Creating entities for autoloaded sublevels
Initializing entities for autoloaded sublevels
Sending spawn messages
Finalizing level
Running
```

Client loading states info:
```
Registering entity resources
Creating material grid
Creating physics manager
Loading assets
Init render modules
Creating decal templates
Loading done
Creating entities for autoloaded sublevels
Initializing entities for autoloaded sublevels
Sending spawn messages
Updating entity world
Blocking on shader creation
Level exited
```


## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **screenInfo** | string |  |

## Example

```lua
Events:Subscribe('Level:LoadingInfo', function(screenInfo)
    -- Do stuff here.
end)
```
