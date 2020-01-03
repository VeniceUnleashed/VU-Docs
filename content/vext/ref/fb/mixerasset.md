---
title: MixerAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| MixerAsset()                                                          | Create a new instance of this container type.                                                               |
| MixerAsset(MixerAsset other)                                          | Create a reference copy of an instance of the same type.                                                    |
| MixerAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MixerAsset](/vext/ref/fb/mixerasset/).                                      |
| MixerAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerAsset](/vext/ref/fb/mixerasset/). |

## Properties

| Name          | Type                             | Description |
| ------------- | -------------------------------- | ----------- |
| graph         | [MixerGraphData](/vext/ref/fb/mixergraphdata/) |             |
| presets       | [MixerPreset](/vext/ref/fb/mixerpreset/)\[\]   |             |
| defaultPreset | [MixerPreset](/vext/ref/fb/mixerpreset/)       |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [MixerAsset](/vext/ref/fb/mixerasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerAsset](/vext/ref/fb/mixerasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
