---
title: PathfindingDebugSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[PathfindingDebugSettings](#constructor-0)**() |
| **[PathfindingDebugSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PathfindingDebugSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "typesToDrawMask" >}} | int |
| {{< prop "textOffsetY" >}} | int |
| {{< prop "textStartX" >}} | int |
| {{< prop "textStartY" >}} | int |
| {{< prop "replayMode" >}} | [PathfindingReplayMode](/vext/ref/fb/pathfindingreplaymode) |
| {{< prop "drawConnections" >}} | bool |
| {{< prop "drawObstacles" >}} | bool |
| {{< prop "drawPolygonOutline" >}} | bool |
| {{< prop "drawFilledPolygons" >}} | bool |
| {{< prop "drawMemory" >}} | bool |
| {{< prop "drawStats" >}} | bool |
| {{< prop "drawTimings" >}} | bool |
| {{< prop "originalPaths" >}} | bool |
| {{< prop "randomPositions" >}} | bool |
| {{< prop "potentialObstacles" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PathfindingDebugSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PathfindingDebugSettings {#constructor-0}
> **PathfindingDebugSettings**()

Creates a new [PathfindingDebugSettings](/vext/ref/fb/pathfindingdebugsettings) frostbite instance.

### PathfindingDebugSettings {#constructor-1}
> **PathfindingDebugSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PathfindingDebugSettings](/vext/ref/fb/pathfindingdebugsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PathfindingDebugSettings {#constructor-2}
> **PathfindingDebugSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingDebugSettings](/vext/ref/fb/pathfindingdebugsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PathfindingDebugSettings](/vext/ref/fb/pathfindingdebugsettings). |

## Properties
### {{% prop-heading "typesToDrawMask" %}}
> **int**

### {{% prop-heading "textOffsetY" %}}
> **int**

### {{% prop-heading "textStartX" %}}
> **int**

### {{% prop-heading "textStartY" %}}
> **int**

### {{% prop-heading "replayMode" %}}
> **[PathfindingReplayMode](/vext/ref/fb/pathfindingreplaymode)**

### {{% prop-heading "drawConnections" %}}
> **bool**

### {{% prop-heading "drawObstacles" %}}
> **bool**

### {{% prop-heading "drawPolygonOutline" %}}
> **bool**

### {{% prop-heading "drawFilledPolygons" %}}
> **bool**

### {{% prop-heading "drawMemory" %}}
> **bool**

### {{% prop-heading "drawStats" %}}
> **bool**

### {{% prop-heading "drawTimings" %}}
> **bool**

### {{% prop-heading "originalPaths" %}}
> **bool**

### {{% prop-heading "randomPositions" %}}
> **bool**

### {{% prop-heading "potentialObstacles" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PathfindingDebugSettings](/vext/ref/fb/pathfindingdebugsettings) type.

