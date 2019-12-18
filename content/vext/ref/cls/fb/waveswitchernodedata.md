---
title: WaveSwitcherNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| WaveSwitcherNodeData()                                                          | Create a new instance of this container type.                                                                                   |
| WaveSwitcherNodeData(WaveSwitcherNodeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| WaveSwitcherNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [WaveSwitcherNodeData](WaveSwitcherNodeData).            |
| WaveSwitcherNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WaveSwitcherNodeData](WaveSwitcherNodeData). |

## Properties

| Name             | Type                                     | Description |
| ---------------- | ---------------------------------------- | ----------- |
| index            | [AudioGraphNodePort](AudioGraphNodePort) |             |
| advance          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| wave             | [AudioGraphNodePort](AudioGraphNodePort) |             |
| indexChanged     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| waves            | [SoundWaveAsset](SoundWaveAsset)\[\]     |             |
| defaultIndex     | number                                   |             |
| isRandom         | bool                                     |             |
| randomStartIndex | bool                                     |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [WaveSwitcherNodeData](WaveSwitcherNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WaveSwitcherNodeData](WaveSwitcherNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
