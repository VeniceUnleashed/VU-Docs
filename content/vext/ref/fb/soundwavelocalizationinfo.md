---
title: SoundWaveLocalizationInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| SoundWaveLocalizationInfo()                                | Create a new instance of this structure type.            |
| SoundWaveLocalizationInfo(SoundWaveLocalizationInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                           | Description |
| ------------------- | ------------------------------ | ----------- |
| language            | [AudioLanguage](/vext/ref/fb/audiolanguage/) |             |
| firstVariationIndex | number                         |             |
| variationCount      | number                         |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo/) | [Clone](#clone) |            |

### Clone

> [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
