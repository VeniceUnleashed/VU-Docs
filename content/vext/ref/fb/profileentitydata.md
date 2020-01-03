---
title: ProfileEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ProfileEntityData()                                                          | Create a new instance of this container type.                                                                             |
| ProfileEntityData(ProfileEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| ProfileEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ProfileEntityData](ProfileEntityData).                            |
| ProfileEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ProfileEntityData](ProfileEntityData).                    |
| ProfileEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ProfileEntityData](ProfileEntityData).              |
| ProfileEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProfileEntityData](ProfileEntityData). |

## Properties

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| realm       | [Realm](Realm) |             |
| profileName | string         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [ProfileEntityData](ProfileEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProfileEntityData](ProfileEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
