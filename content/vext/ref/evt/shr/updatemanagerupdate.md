---
title: UpdateManager:Update (Shared Event)
---
## Description

## Parameters

| Type                                         | Name      | Description |
| -------------------------------------------- | --------- | ----------- |
| float                                        | deltaTime |             |
| [UpdatePass](/vext/ref/cls/fb/updatepass) | pass      |             |

## Usage Example

``` lua
local function OnUpdateManagerUpdate(deltaTime, pass)
    -- Add your logic here
end

Events:Subscribe('UpdateManager:Update', OnUpdateManagerUpdate)
```
