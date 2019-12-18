---
title: StanceSwitchSoundData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| StanceSwitchSoundData()                            | Create a new instance of this structure type.            |
| StanceSwitchSoundData(StanceSwitchSoundData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| stanceSwitchSound | [SoundAsset](SoundAsset) |             |
| validStances      | number\[\]               |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [StanceSwitchSoundData](StanceSwitchSoundData) | [Clone](#clone) |            |

### Clone

> [StanceSwitchSoundData](StanceSwitchSoundData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
