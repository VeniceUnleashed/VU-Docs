---
title: SamplerNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SamplerNodeData()                                                          | Create a new instance of this container type.                                                                         |
| SamplerNodeData(SamplerNodeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SamplerNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [SamplerNodeData](SamplerNodeData).            |
| SamplerNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SamplerNodeData](SamplerNodeData). |

## Properties

| Name            | Type                                     | Description |
| --------------- | ---------------------------------------- | ----------- |
| externalWave    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| variation       | [AudioGraphNodePort](AudioGraphNodePort) |             |
| offset          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| delay           | [AudioGraphNodePort](AudioGraphNodePort) |             |
| pitch           | [AudioGraphNodePort](AudioGraphNodePort) |             |
| amplitude       | [AudioGraphNodePort](AudioGraphNodePort) |             |
| enableStep      | [AudioGraphNodePort](AudioGraphNodePort) |             |
| buffer          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| trigger         | [AudioGraphNodePort](AudioGraphNodePort) |             |
| release         | [AudioGraphNodePort](AudioGraphNodePort) |             |
| step            | [AudioGraphNodePort](AudioGraphNodePort) |             |
| output          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| finished        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| buffered        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| position        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| wave            | [SoundWaveAsset](SoundWaveAsset)         |             |
| basePitch       | number                                   |             |
| loop            | [LoopType](LoopType)                     |             |
| plugins         | [SamplerPlugins](SamplerPlugins)\[\]     |             |
| shuffleSegments | bool                                     |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SamplerNodeData](SamplerNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SamplerNodeData](SamplerNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
