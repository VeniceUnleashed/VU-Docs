---
title: MixerSimplePresetNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| MixerSimplePresetNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| MixerSimplePresetNodeData(MixerSimplePresetNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| MixerSimplePresetNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata/).            |
| MixerSimplePresetNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata/). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| index   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| presets | [MixerPreset](/vext/ref/fb/mixerpreset/)\[\]           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
