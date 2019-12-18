---
title: SoundWaveVariation (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoundWaveVariation()                                                          | Create a new instance of this container type.                                                                               |
| SoundWaveVariation(SoundWaveVariation other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoundWaveVariation([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundWaveVariation](SoundWaveVariation). |

## Properties

| Name                  | Type                                                       | Description |
| --------------------- | ---------------------------------------------------------- | ----------- |
| subtitles             | [SoundWaveSubtitle](SoundWaveSubtitle)\[\]                 |             |
| seekTablesSize        | number                                                     |             |
| segments              | [SoundWaveVariationSegment](SoundWaveVariationSegment)\[\] |             |
| chunkIndex            | number                                                     |             |
| firstLoopSegmentIndex | number                                                     |             |
| lastLoopSegmentIndex  | number                                                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundWaveVariation](SoundWaveVariation) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundWaveVariation](SoundWaveVariation) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
