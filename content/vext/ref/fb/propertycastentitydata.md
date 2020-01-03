---
title: PropertyCastEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PropertyCastEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PropertyCastEntityData(PropertyCastEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PropertyCastEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PropertyCastEntityData](PropertyCastEntityData).                            |
| PropertyCastEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PropertyCastEntityData](PropertyCastEntityData).                    |
| PropertyCastEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PropertyCastEntityData](PropertyCastEntityData).              |
| PropertyCastEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyCastEntityData](PropertyCastEntityData). |

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| realm      | [Realm](Realm) |             |
| intValue   | number         |             |
| floatValue | number         |             |
| boolValue  | bool           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PropertyCastEntityData](PropertyCastEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropertyCastEntityData](PropertyCastEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
