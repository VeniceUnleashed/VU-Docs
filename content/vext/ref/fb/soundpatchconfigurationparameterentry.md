---
title: SoundPatchConfigurationParameterEntry
---
### Base Classes

[SoundPatchConfigurationEntry](SoundPatchConfigurationEntry)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                               | Description                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoundPatchConfigurationParameterEntry()                                                                   | Create a new instance of this container type.                                                                                                                              |
| SoundPatchConfigurationParameterEntry(SoundPatchConfigurationParameterEntry other)                        | Create a reference copy of an instance of the same type.                                                                                                                   |
| SoundPatchConfigurationParameterEntry([SoundPatchConfigurationEntry](SoundPatchConfigurationEntry) other) | Upcast an instance of type [SoundPatchConfigurationEntry](SoundPatchConfigurationEntry) to [SoundPatchConfigurationParameterEntry](SoundPatchConfigurationParameterEntry). |
| SoundPatchConfigurationParameterEntry([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchConfigurationParameterEntry](SoundPatchConfigurationParameterEntry).          |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| nameHash | number |             |
| value    | number |             |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundPatchConfigurationParameterEntry](SoundPatchConfigurationParameterEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundPatchConfigurationParameterEntry](SoundPatchConfigurationParameterEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
