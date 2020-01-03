---
title: PathfindingBuildOrderData
---
### Base Classes

[VolumeVectorShapeData](VolumeVectorShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingBuildOrderData()                                                          | Create a new instance of this container type.                                                                                             |
| PathfindingBuildOrderData(PathfindingBuildOrderData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PathfindingBuildOrderData([VolumeVectorShapeData](VolumeVectorShapeData) other)      | Upcast an instance of type [VolumeVectorShapeData](VolumeVectorShapeData) to [PathfindingBuildOrderData](PathfindingBuildOrderData).      |
| PathfindingBuildOrderData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [PathfindingBuildOrderData](PathfindingBuildOrderData).                  |
| PathfindingBuildOrderData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [PathfindingBuildOrderData](PathfindingBuildOrderData).                      |
| PathfindingBuildOrderData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PathfindingBuildOrderData](PathfindingBuildOrderData).                    |
| PathfindingBuildOrderData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PathfindingBuildOrderData](PathfindingBuildOrderData).              |
| PathfindingBuildOrderData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingBuildOrderData](PathfindingBuildOrderData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PathfindingBuildOrderData](PathfindingBuildOrderData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingBuildOrderData](PathfindingBuildOrderData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
