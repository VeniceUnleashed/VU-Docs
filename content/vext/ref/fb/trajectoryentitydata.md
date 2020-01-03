---
title: TrajectoryEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TrajectoryEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| TrajectoryEntityData(TrajectoryEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TrajectoryEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TrajectoryEntityData](/vext/ref/fb/trajectoryentitydata/).                            |
| TrajectoryEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TrajectoryEntityData](/vext/ref/fb/trajectoryentitydata/).                    |
| TrajectoryEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TrajectoryEntityData](/vext/ref/fb/trajectoryentitydata/).              |
| TrajectoryEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrajectoryEntityData](/vext/ref/fb/trajectoryentitydata/). |

## Properties

| Name         | Type                                                    | Description |
| ------------ | ------------------------------------------------------- | ----------- |
| outTransform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TrajectoryEntityData](/vext/ref/fb/trajectoryentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TrajectoryEntityData](/vext/ref/fb/trajectoryentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
