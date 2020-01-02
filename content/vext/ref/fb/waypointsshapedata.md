---
title: WaypointsShapeData
---
### Base Classes

[VectorShapeData](VectorShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WaypointsShapeData()                                                          | Create a new instance of this container type.                                                                               |
| WaypointsShapeData(WaypointsShapeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WaypointsShapeData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [WaypointsShapeData](WaypointsShapeData).                  |
| WaypointsShapeData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [WaypointsShapeData](WaypointsShapeData).                      |
| WaypointsShapeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WaypointsShapeData](WaypointsShapeData).                    |
| WaypointsShapeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WaypointsShapeData](WaypointsShapeData).              |
| WaypointsShapeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WaypointsShapeData](WaypointsShapeData). |

## Properties

| Name      | Type                             | Description |
| --------- | -------------------------------- | ----------- |
| waypoints | [WaypointData](WaypointData)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WaypointsShapeData](WaypointsShapeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WaypointsShapeData](WaypointsShapeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
