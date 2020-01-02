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
| SoundState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundState](SoundState). |

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
| [SoundState](SoundState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundState](SoundState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
