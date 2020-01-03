---
title: PathfindingBuildOrderData
---
### Base Classes

[VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingBuildOrderData()                                                          | Create a new instance of this container type.                                                                                             |
| PathfindingBuildOrderData(PathfindingBuildOrderData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PathfindingBuildOrderData([VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/) other)      | Upcast an instance of type [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/) to [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/).      |
| PathfindingBuildOrderData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/).                  |
| PathfindingBuildOrderData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/).                      |
| PathfindingBuildOrderData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/).                    |
| PathfindingBuildOrderData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/).              |
| PathfindingBuildOrderData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingBuildOrderData](/vext/ref/fb/pathfindingbuildorderdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
