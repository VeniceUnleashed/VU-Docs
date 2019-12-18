---
title: SoundPrimeEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SoundPrimeEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SoundPrimeEntityData(SoundPrimeEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SoundPrimeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoundPrimeEntityData](SoundPrimeEntityData).                            |
| SoundPrimeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoundPrimeEntityData](SoundPrimeEntityData).                    |
| SoundPrimeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoundPrimeEntityData](SoundPrimeEntityData).              |
| SoundPrimeEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundPrimeEntityData](SoundPrimeEntityData). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| dataAssets | [SoundDataAsset](SoundDataAsset)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundPrimeEntityData](SoundPrimeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundPrimeEntityData](SoundPrimeEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
