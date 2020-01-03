---
title: SoundWaveAsset
---
### Base Classes

[SoundDataAsset](/vext/ref/fb/sounddataasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SoundWaveAsset()                                                          | Create a new instance of this container type.                                                                       |
| SoundWaveAsset(SoundWaveAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SoundWaveAsset([SoundDataAsset](/vext/ref/fb/sounddataasset/) other)                    | Upcast an instance of type [SoundDataAsset](/vext/ref/fb/sounddataasset/) to [SoundWaveAsset](/vext/ref/fb/soundwaveasset/).                    |
| SoundWaveAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoundWaveAsset](/vext/ref/fb/soundwaveasset/).                                      |
| SoundWaveAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundWaveAsset](/vext/ref/fb/soundwaveasset/). |

## Properties

| Name                      | Type                                                       | Description |
| ------------------------- | ---------------------------------------------------------- | ----------- |
| variations                | [SoundWaveVariation](/vext/ref/fb/soundwavevariation/)\[\]               |             |
| localization              | [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo/)\[\] |             |
| subtitleStringIds         | string\[\]                                                 |             |
| selection                 | [SoundWaveVariationSelection](/vext/ref/fb/soundwavevariationselection/) |             |
| streamPool                | [StreamPoolAsset](/vext/ref/fb/streampoolasset/)                         |             |
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
| [SoundWaveAsset](/vext/ref/fb/soundwaveasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundWaveAsset](/vext/ref/fb/soundwaveasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
