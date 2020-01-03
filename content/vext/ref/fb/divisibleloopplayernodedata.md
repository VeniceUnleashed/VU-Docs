---
title: DivisibleLoopPlayerNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DivisibleLoopPlayerNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| DivisibleLoopPlayerNodeData(DivisibleLoopPlayerNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| DivisibleLoopPlayerNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata/).            |
| DivisibleLoopPlayerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata/). |

## Properties

| Name                  | Type                                                         | Description |
| --------------------- | ------------------------------------------------------------ | ----------- |
| start                 | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                     |             |
| stop                  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                     |             |
| amplitude             | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                     |             |
| freezeSegment         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                     |             |
| output                | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                     |             |
| wave                  | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                             |             |
| externalWave          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)                     |             |
| plugins               | [DivisibleLoopPlayerPlugins](/vext/ref/fb/divisibleloopplayerplugins/)\[\] |             |
| crossFadeLength       | number                                                       |             |
| startAtRandomPosition | bool                                                         |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DivisibleLoopPlayerNodeData](/vext/ref/fb/divisibleloopplayernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
