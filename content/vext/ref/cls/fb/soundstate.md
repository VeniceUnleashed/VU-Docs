---
title: SoundState (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SoundState()                                                          | Create a new instance of this container type.                                                               |
| SoundState(SoundState other)                                          | Create a reference copy of an instance of the same type.                                                    |
| SoundState([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundState](SoundState). |

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| name              | string                   |             |
| lpCutoffFrequency | number                   |             |
| duration          | number                   |             |
| fadeInTime        | number                   |             |
| fadeOutTime       | number                   |             |
| bypassSound       | [SoundAsset](SoundAsset) |             |
| hdrSetting        | [HdrSetting](HdrSetting) |             |
| mixer             | [MixerAsset](MixerAsset) |             |
| fadeSound         | bool                     |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [SoundState](SoundState) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundState](SoundState) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
