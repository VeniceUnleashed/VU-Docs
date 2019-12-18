---
title: FloatEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| FloatEntityData()                                                          | Create a new instance of this container type.                                                                         |
| FloatEntityData(FloatEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| FloatEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FloatEntityData](FloatEntityData).                            |
| FloatEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FloatEntityData](FloatEntityData).                    |
| FloatEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FloatEntityData](FloatEntityData).              |
| FloatEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FloatEntityData](FloatEntityData). |

## Properties

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| realm        | [Realm](Realm) |             |
| defaultValue | number         |             |
| incDecValue  | number         |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [FloatEntityData](FloatEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FloatEntityData](FloatEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
