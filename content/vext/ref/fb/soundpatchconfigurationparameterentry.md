---
title: SoundPatchConfigurationParameterEntry
---
### Base Classes

[SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                               | Description                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoundPatchConfigurationParameterEntry()                                                                   | Create a new instance of this container type.                                                                                                                              |
| SoundPatchConfigurationParameterEntry(SoundPatchConfigurationParameterEntry other)                        | Create a reference copy of an instance of the same type.                                                                                                                   |
| SoundPatchConfigurationParameterEntry([SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry/) other) | Upcast an instance of type [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry/) to [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry/). |
| SoundPatchConfigurationParameterEntry([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry/).          |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| nameHash | number |             |
| value    | number |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundPatchConfigurationParameterEntry](/vext/ref/fb/soundpatchconfigurationparameterentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
