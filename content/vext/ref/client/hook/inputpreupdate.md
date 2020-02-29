---
title: Input:PreUpdate
---
## Description



## Parameters

| Type                                                      | Name      | Description                    |
| --------------------------------------------------------- | --------- | ------------------------------ |
| [ConceptCache](/vext/ref/client/class/conceptcache)       | cache     |                                |
| float                                                     | deltaTime |                                |

## Usage Example

``` lua
Hooks:Install('Input:PreUpdate', 100, function(hook, cache, deltaTime)
    --Add example code here...
end)
```
