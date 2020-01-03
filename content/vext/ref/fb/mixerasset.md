---
title: MixerAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| MixerAsset()                                                          | Create a new instance of this container type.                                                               |
| MixerAsset(MixerAsset other)                                          | Create a reference copy of an instance of the same type.                                                    |
| MixerAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MixerAsset](MixerAsset).                                      |
| MixerAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerAsset](MixerAsset). |

## Properties

| Name          | Type                             | Description |
| ------------- | -------------------------------- | ----------- |
| graph         | [MixerGraphData](MixerGraphData) |             |
| presets       | [MixerPreset](MixerPreset)\[\]   |             |
| defaultPreset | [MixerPreset](MixerPreset)       |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [MixerAsset](MixerAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerAsset](MixerAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
