---
title: MixerPreset
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| MixerPreset()                                                          | Create a new instance of this container type.                                                                 |
| MixerPreset(MixerPreset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| MixerPreset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerPreset](MixerPreset). |

## Properties

| Name     | Type                                             | Description |
| -------- | ------------------------------------------------ | ----------- |
| nameHash | number                                           |             |
| groups   | [MixerPresetGroupData](MixerPresetGroupData)\[\] |             |
| nodes    | [MixerPresetNodeData](MixerPresetNodeData)\[\]   |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [MixerPreset](MixerPreset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerPreset](MixerPreset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
