---
title: SoundPrimeEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SoundPrimeEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SoundPrimeEntityData(SoundPrimeEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SoundPrimeEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SoundPrimeEntityData](/vext/ref/fb/soundprimeentitydata/).                            |
| SoundPrimeEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoundPrimeEntityData](/vext/ref/fb/soundprimeentitydata/).                    |
| SoundPrimeEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoundPrimeEntityData](/vext/ref/fb/soundprimeentitydata/).              |
| SoundPrimeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPrimeEntityData](/vext/ref/fb/soundprimeentitydata/). |

## Properties

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| dataAssets | [SoundDataAsset](/vext/ref/fb/sounddataasset/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundPrimeEntityData](/vext/ref/fb/soundprimeentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundPrimeEntityData](/vext/ref/fb/soundprimeentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
