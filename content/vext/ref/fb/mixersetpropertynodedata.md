---
title: MixerSetPropertyNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| MixerSetPropertyNodeData()                                                          | Create a new instance of this container type.                                                                                           |
| MixerSetPropertyNodeData(MixerSetPropertyNodeData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| MixerSetPropertyNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata/).            |
| MixerSetPropertyNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata/). |

## Properties

| Name    | Type                                               | Description |
| ------- | -------------------------------------------------- | ----------- |
| entries | [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
