---
title: DialogSamplerNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DialogSamplerNodeData()                                                          | Create a new instance of this container type.                                                                                     |
| DialogSamplerNodeData(DialogSamplerNodeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| DialogSamplerNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [DialogSamplerNodeData](DialogSamplerNodeData).            |
| DialogSamplerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DialogSamplerNodeData](DialogSamplerNodeData). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| pitch           | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| amplitude       | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| continue        | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| output          | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| triggered       | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| finished        | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| sndPlayerPlugin | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| resamplePlugin  | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| pausePlugin     | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| gainPlugin      | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| tailLength      | number                                     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [DialogSamplerNodeData](DialogSamplerNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DialogSamplerNodeData](DialogSamplerNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
