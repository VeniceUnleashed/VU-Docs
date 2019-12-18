---
title: MixerSimplePresetNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| MixerSimplePresetNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| MixerSimplePresetNodeData(MixerSimplePresetNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| MixerSimplePresetNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [MixerSimplePresetNodeData](MixerSimplePresetNodeData).            |
| MixerSimplePresetNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MixerSimplePresetNodeData](MixerSimplePresetNodeData). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| index   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| presets | [MixerPreset](MixerPreset)\[\]           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MixerSimplePresetNodeData](MixerSimplePresetNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MixerSimplePresetNodeData](MixerSimplePresetNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
