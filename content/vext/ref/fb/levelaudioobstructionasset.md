---
title: LevelAudioObstructionAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| LevelAudioObstructionAsset()                                                          | Create a new instance of this container type.                                                                                               |
| LevelAudioObstructionAsset(LevelAudioObstructionAsset other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| LevelAudioObstructionAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LevelAudioObstructionAsset](/vext/ref/fb/levelaudioobstructionasset/).                                      |
| LevelAudioObstructionAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelAudioObstructionAsset](/vext/ref/fb/levelaudioobstructionasset/). |

## Properties

| Name                      | Type                                                             | Description |
| ------------------------- | ---------------------------------------------------------------- | ----------- |
| materialMap               | [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo/)\[\] |             |
| frequencySlewRate         | number                                                           |             |
| gainSlewRate              | number                                                           |             |
| maxRaycastDistanceSquared | number                                                           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LevelAudioObstructionAsset](/vext/ref/fb/levelaudioobstructionasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelAudioObstructionAsset](/vext/ref/fb/levelaudioobstructionasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
