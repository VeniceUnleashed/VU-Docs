---
title: SoundWaveVariationSegment
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| SoundWaveVariationSegment()                                | Create a new instance of this structure type.            |
| SoundWaveVariationSegment(SoundWaveVariationSegment other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| samplesOffset   | number |             |
| seekTableOffset | number |             |
| segmentLength   | number |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [SoundWaveVariationSegment](SoundWaveVariationSegment) | [Clone](#clone) |            |

### Clone

> [SoundWaveVariationSegment](SoundWaveVariationSegment) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
