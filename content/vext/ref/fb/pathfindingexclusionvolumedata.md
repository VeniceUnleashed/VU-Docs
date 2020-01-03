---
title: PathfindingExclusionVolumeData
---
### Base Classes

[OBBData](/vext/ref/fb/obbdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingExclusionVolumeData()                                                          | Create a new instance of this container type.                                                                                                       |
| PathfindingExclusionVolumeData(PathfindingExclusionVolumeData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PathfindingExclusionVolumeData([OBBData](/vext/ref/fb/obbdata/) other)                                  | Upcast an instance of type [OBBData](/vext/ref/fb/obbdata/) to [PathfindingExclusionVolumeData](/vext/ref/fb/pathfindingexclusionvolumedata/).                                  |
| PathfindingExclusionVolumeData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [PathfindingExclusionVolumeData](/vext/ref/fb/pathfindingexclusionvolumedata/).                      |
| PathfindingExclusionVolumeData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PathfindingExclusionVolumeData](/vext/ref/fb/pathfindingexclusionvolumedata/).                    |
| PathfindingExclusionVolumeData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PathfindingExclusionVolumeData](/vext/ref/fb/pathfindingexclusionvolumedata/).              |
| PathfindingExclusionVolumeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingExclusionVolumeData](/vext/ref/fb/pathfindingexclusionvolumedata/). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingExclusionVolumeData](/vext/ref/fb/pathfindingexclusionvolumedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingExclusionVolumeData](/vext/ref/fb/pathfindingexclusionvolumedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
