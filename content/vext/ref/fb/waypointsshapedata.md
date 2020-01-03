---
title: WaypointsShapeData
---
### Base Classes

[VectorShapeData](/vext/ref/fb/vectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WaypointsShapeData()                                                          | Create a new instance of this container type.                                                                               |
| WaypointsShapeData(WaypointsShapeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WaypointsShapeData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [WaypointsShapeData](/vext/ref/fb/waypointsshapedata/).                  |
| WaypointsShapeData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [WaypointsShapeData](/vext/ref/fb/waypointsshapedata/).                      |
| WaypointsShapeData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WaypointsShapeData](/vext/ref/fb/waypointsshapedata/).                    |
| WaypointsShapeData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WaypointsShapeData](/vext/ref/fb/waypointsshapedata/).              |
| WaypointsShapeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WaypointsShapeData](/vext/ref/fb/waypointsshapedata/). |

## Properties

| Name      | Type                             | Description |
| --------- | -------------------------------- | ----------- |
| waypoints | [WaypointData](/vext/ref/fb/waypointdata/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WaypointsShapeData](/vext/ref/fb/waypointsshapedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WaypointsShapeData](/vext/ref/fb/waypointsshapedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
