---
title: MasterUnitSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MasterUnitSettings()                                                          | Create a new instance of this container type.                                                                               |
| MasterUnitSettings(MasterUnitSettings other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MasterUnitSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MasterUnitSettings](MasterUnitSettings). |

## Properties

| Name                   | Type                                     | Description |
| ---------------------- | ---------------------------------------- | ----------- |
| name                   | string                                   |             |
| equalizer              | [EqualizerSettings](EqualizerSettings)   |             |
| compressor             | [CompressorSettings](CompressorSettings) |             |
| masterVolume           | number                                   |             |
| masterLfeGain          | number                                   |             |
| masterDialogGain       | number                                   |             |
| reverbVolume           | number                                   |             |
| mainMixVolume          | number                                   |             |
| distortionClipLevel    | number                                   |             |
| parallelDistortionGain | number                                   |             |
| postEffectsGain        | number                                   |             |
| fadeTime               | number                                   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MasterUnitSettings](MasterUnitSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MasterUnitSettings](MasterUnitSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
