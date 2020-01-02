---
title: PathfindingDebugSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingDebugSettings()                                                          | Create a new instance of this container type.                                                                                           |
| PathfindingDebugSettings(PathfindingDebugSettings other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PathfindingDebugSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingDebugSettings](PathfindingDebugSettings). |

## Properties

| Name               | Type                                           | Description |
| ------------------ | ---------------------------------------------- | ----------- |
| typesToDrawMask    | number                                         |             |
| textOffsetY        | number                                         |             |
| textStartX         | number                                         |             |
| textStartY         | number                                         |             |
| replayMode         | [PathfindingReplayMode](PathfindingReplayMode) |             |
| drawConnections    | bool                                           |             |
| drawObstacles      | bool                                           |             |
| drawPolygonOutline | bool                                           |             |
| drawFilledPolygons | bool                                           |             |
| drawMemory         | bool                                           |             |
| drawStats          | bool                                           |             |
| drawTimings        | bool                                           |             |
| originalPaths      | bool                                           |             |
| randomPositions    | bool                                           |             |
| potentialObstacles | bool                                           |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingDebugSettings](PathfindingDebugSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingDebugSettings](PathfindingDebugSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
