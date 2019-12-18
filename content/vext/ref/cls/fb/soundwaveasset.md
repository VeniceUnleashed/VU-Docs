---
title: SoundWaveAsset (Frostbite Container)
---
### Base Classes

[SoundDataAsset](SoundDataAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundWaveAsset()                                                          | Create a new instance of this container type.                                                                       |
| SoundWaveAsset(SoundWaveAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundWaveAsset([SoundDataAsset](SoundDataAsset) other)                    | Upcast an instance of type [SoundDataAsset](SoundDataAsset) to [SoundWaveAsset](SoundWaveAsset).                    |
| SoundWaveAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundWaveAsset](SoundWaveAsset).                                      |
| SoundWaveAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundWaveAsset](SoundWaveAsset). |

## Properties

| Name                      | Type                                                       | Description |
| ------------------------- | ---------------------------------------------------------- | ----------- |
| variations                | [SoundWaveVariation](SoundWaveVariation)\[\]               |             |
| localization              | [SoundWaveLocalizationInfo](SoundWaveLocalizationInfo)\[\] |             |
| subtitleStringIds         | string\[\]                                                 |             |
| selection                 | [SoundWaveVariationSelection](SoundWaveVariationSelection) |             |
| streamPool                | [StreamPoolAsset](StreamPoolAsset)                         |             |
| seekable                  | bool                                                       |             |
| preferAvailableVariations | bool                                                       |             |
| persistentVariationCount  | number                                                     |             |
| channelCount              | number                                                     |             |
| voicePriority             | number                                                     |             |
| primePriority             | number                                                     |             |
| requestPriority           | number                                                     |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SoundWaveAsset](SoundWaveAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundWaveAsset](SoundWaveAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
