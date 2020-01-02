---
title: LevelAudioObstructionAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| LevelAudioObstructionAsset()                                                          | Create a new instance of this container type.                                                                                               |
| LevelAudioObstructionAsset(LevelAudioObstructionAsset other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| LevelAudioObstructionAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LevelAudioObstructionAsset](LevelAudioObstructionAsset).                                      |
| LevelAudioObstructionAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelAudioObstructionAsset](LevelAudioObstructionAsset). |

## Properties

| Name                      | Type                                                             | Description |
| ------------------------- | ---------------------------------------------------------------- | ----------- |
| materialMap               | [AudioObstructionMaterialInfo](AudioObstructionMaterialInfo)\[\] |             |
| frequencySlewRate         | number                                                           |             |
| gainSlewRate              | number                                                           |             |
| maxRaycastDistanceSquared | number                                                           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LevelAudioObstructionAsset](LevelAudioObstructionAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelAudioObstructionAsset](LevelAudioObstructionAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
