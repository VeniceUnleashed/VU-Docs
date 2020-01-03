---
title: AudioObstructionMaterialInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| AudioObstructionMaterialInfo()                                   | Create a new instance of this structure type.            |
| AudioObstructionMaterialInfo(AudioObstructionMaterialInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| material             | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |
| obstructionFrequency | number                                         |             |
| gainReduction        | number                                         |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo/) | [Clone](#clone) |            |

### Clone

> [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
