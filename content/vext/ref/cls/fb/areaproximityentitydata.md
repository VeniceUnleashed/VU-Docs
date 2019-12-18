---
title: AreaProximityEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AreaProximityEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| AreaProximityEntityData(AreaProximityEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AreaProximityEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AreaProximityEntityData](AreaProximityEntityData).                            |
| AreaProximityEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AreaProximityEntityData](AreaProximityEntityData).                    |
| AreaProximityEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AreaProximityEntityData](AreaProximityEntityData).              |
| AreaProximityEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AreaProximityEntityData](AreaProximityEntityData). |

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| realm             | [Realm](Realm)           |             |
| proximityDistance | number                   |             |
| updatePass        | [UpdatePass](UpdatePass) |             |
| autoStart         | bool                     |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AreaProximityEntityData](AreaProximityEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AreaProximityEntityData](AreaProximityEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
