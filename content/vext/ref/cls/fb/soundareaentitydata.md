---
title: SoundAreaEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SoundAreaEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| SoundAreaEntityData(SoundAreaEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SoundAreaEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoundAreaEntityData](SoundAreaEntityData).                            |
| SoundAreaEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoundAreaEntityData](SoundAreaEntityData).                    |
| SoundAreaEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoundAreaEntityData](SoundAreaEntityData).              |
| SoundAreaEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundAreaEntityData](SoundAreaEntityData). |

## Properties

| Name                | Type                                           | Description |
| ------------------- | ---------------------------------------------- | ----------- |
| sound               | [SoundAsset](SoundAsset)                       |             |
| bigWorld            | [BigWorldSettingsAsset](BigWorldSettingsAsset) |             |
| fadeWidth           | number                                         |             |
| proximityMultiplier | number                                         |             |
| fadeCurve           | [FadeCurveType](FadeCurveType)                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundAreaEntityData](SoundAreaEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundAreaEntityData](SoundAreaEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
