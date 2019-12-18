---
title: DivisibleLoopPlayerNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| DivisibleLoopPlayerNodeData()                                                          | Create a new instance of this container type.                                                                                                 |
| DivisibleLoopPlayerNodeData(DivisibleLoopPlayerNodeData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| DivisibleLoopPlayerNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [DivisibleLoopPlayerNodeData](DivisibleLoopPlayerNodeData).            |
| DivisibleLoopPlayerNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DivisibleLoopPlayerNodeData](DivisibleLoopPlayerNodeData). |

## Properties

| Name                  | Type                                                         | Description |
| --------------------- | ------------------------------------------------------------ | ----------- |
| start                 | [AudioGraphNodePort](AudioGraphNodePort)                     |             |
| stop                  | [AudioGraphNodePort](AudioGraphNodePort)                     |             |
| amplitude             | [AudioGraphNodePort](AudioGraphNodePort)                     |             |
| freezeSegment         | [AudioGraphNodePort](AudioGraphNodePort)                     |             |
| output                | [AudioGraphNodePort](AudioGraphNodePort)                     |             |
| wave                  | [SoundWaveAsset](SoundWaveAsset)                             |             |
| externalWave          | [AudioGraphNodePort](AudioGraphNodePort)                     |             |
| plugins               | [DivisibleLoopPlayerPlugins](DivisibleLoopPlayerPlugins)\[\] |             |
| crossFadeLength       | number                                                       |             |
| startAtRandomPosition | bool                                                         |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DivisibleLoopPlayerNodeData](DivisibleLoopPlayerNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DivisibleLoopPlayerNodeData](DivisibleLoopPlayerNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
