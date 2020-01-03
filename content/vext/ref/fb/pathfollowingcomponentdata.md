---
title: PathFollowingComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| PathFollowingComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| PathFollowingComponentData(PathFollowingComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| PathFollowingComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata/).                      |
| PathFollowingComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata/).                    |
| PathFollowingComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata/).              |
| PathFollowingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata/). |

## Properties

| Name                        | Type       | Description |
| --------------------------- | ---------- | ----------- |
| updatePathAtDistancePercent | number     |             |
| preferredPathfindingIndex   | number     |             |
| alternatePathfindingIndices | number\[\] |             |
| movementCorridorRadius      | number     |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathFollowingComponentData](/vext/ref/fb/pathfollowingcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
