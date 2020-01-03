---
title: SoundEffectEntityData
---
### Base Classes

[EffectEntityData](/vext/ref/fb/effectentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SoundEffectEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SoundEffectEntityData(SoundEffectEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SoundEffectEntityData([EffectEntityData](/vext/ref/fb/effectentitydata/) other)                | Upcast an instance of type [EffectEntityData](/vext/ref/fb/effectentitydata/) to [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/).                |
| SoundEffectEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/).              |
| SoundEffectEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/).                            |
| SoundEffectEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/).                    |
| SoundEffectEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/).              |
| SoundEffectEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/). |

## Properties

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| sound | [SoundAsset](/vext/ref/fb/soundasset/) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundEffectEntityData](/vext/ref/fb/soundeffectentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
