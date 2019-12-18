---
title: EventCompareGateEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| EventCompareGateEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| EventCompareGateEntityData(EventCompareGateEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| EventCompareGateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventCompareGateEntityData](EventCompareGateEntityData).                            |
| EventCompareGateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventCompareGateEntityData](EventCompareGateEntityData).                    |
| EventCompareGateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventCompareGateEntityData](EventCompareGateEntityData).              |
| EventCompareGateEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EventCompareGateEntityData](EventCompareGateEntityData). |

## Properties

| Name        | Type                                         | Description |
| ----------- | -------------------------------------------- | ----------- |
| value       | number                                       |             |
| compareType | [EventCompareGateType](EventCompareGateType) |             |
| realm       | [Realm](Realm)                               |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventCompareGateEntityData](EventCompareGateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EventCompareGateEntityData](EventCompareGateEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
