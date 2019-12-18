---
title: TrajectoryEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TrajectoryEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| TrajectoryEntityData(TrajectoryEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TrajectoryEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TrajectoryEntityData](TrajectoryEntityData).                            |
| TrajectoryEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TrajectoryEntityData](TrajectoryEntityData).                    |
| TrajectoryEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TrajectoryEntityData](TrajectoryEntityData).              |
| TrajectoryEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TrajectoryEntityData](TrajectoryEntityData). |

## Properties

| Name         | Type                                                    | Description |
| ------------ | ------------------------------------------------------- | ----------- |
| outTransform | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TrajectoryEntityData](TrajectoryEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TrajectoryEntityData](TrajectoryEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
