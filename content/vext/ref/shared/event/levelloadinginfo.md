---
title: Level:LoadingInfo
---
## Description

Used to show information about what the engine is doing during level loading.

Server responses:

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

Client responses:

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

## Parameters

| Type   | Name | Description |
| ------ | ---- | ----------- |
| string | info |             |

## Usage Example

``` lua
local function OnLevelLoadResources(info)
    -- Add your logic here
end

Events:Subscribe('Level:LoadingInfo', OnLevelLoadingInfo)
```
