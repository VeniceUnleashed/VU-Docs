---
title: SamplerNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SamplerNodeData()                                                          | Create a new instance of this container type.                                                                         |
| SamplerNodeData(SamplerNodeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SamplerNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [SamplerNodeData](/vext/ref/fb/samplernodedata/).            |
| SamplerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SamplerNodeData](/vext/ref/fb/samplernodedata/). |

## Properties

| Name            | Type                                     | Description |
| --------------- | ---------------------------------------- | ----------- |
| externalWave    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| variation       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| offset          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| delay           | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| pitch           | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| amplitude       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| enableStep      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| buffer          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| trigger         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| release         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| step            | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| output          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| finished        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| buffered        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| position        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| wave            | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)         |             |
| basePitch       | number                                   |             |
| loop            | [LoopType](/vext/ref/fb/looptype/)                     |             |
| plugins         | [SamplerPlugins](/vext/ref/fb/samplerplugins/)\[\]     |             |
| shuffleSegments | bool                                     |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SamplerNodeData](/vext/ref/fb/samplernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SamplerNodeData](/vext/ref/fb/samplernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
