---
title: SoundState
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SoundState()                                                          | Create a new instance of this container type.                                                               |
| SoundState(SoundState other)                                          | Create a reference copy of an instance of the same type.                                                    |
| SoundState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundState](/vext/ref/fb/soundstate/). |

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| name              | string                   |             |
| lpCutoffFrequency | number                   |             |
| duration          | number                   |             |
| fadeInTime        | number                   |             |
| fadeOutTime       | number                   |             |
| bypassSound       | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| hdrSetting        | [HdrSetting](/vext/ref/fb/hdrsetting/) |             |
| mixer             | [MixerAsset](/vext/ref/fb/mixerasset/) |             |
| fadeSound         | bool                     |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [SoundState](/vext/ref/fb/soundstate/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundState](/vext/ref/fb/soundstate/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
