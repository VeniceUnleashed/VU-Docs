---
title: MixerEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| MixerEntityData()                                                          | Create a new instance of this container type.                                                                         |
| MixerEntityData(MixerEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| MixerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MixerEntityData](MixerEntityData).                            |
| MixerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MixerEntityData](MixerEntityData).                    |
| MixerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MixerEntityData](MixerEntityData).              |
| MixerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MixerEntityData](MixerEntityData). |

## Properties

| Name               | Type                     | Description |
| ------------------ | ------------------------ | ----------- |
| mixer              | [MixerAsset](MixerAsset) |             |
| activateOnCreation | bool                     |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [MixerEntityData](MixerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MixerEntityData](MixerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
