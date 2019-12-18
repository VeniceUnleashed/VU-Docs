---
title: SoundWaveLocalizationInfo (Frostbite Structure)
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
| language            | [AudioLanguage](AudioLanguage) |             |
| firstVariationIndex | number                         |             |
| variationCount      | number                         |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [SoundWaveLocalizationInfo](SoundWaveLocalizationInfo) | [Clone](#clone) |            |

### Clone

> [SoundWaveLocalizationInfo](SoundWaveLocalizationInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
