---
title: CrossfaderNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CrossfaderNodeData()                                                          | Create a new instance of this container type.                                                                               |
| CrossfaderNodeData(CrossfaderNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CrossfaderNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [CrossfaderNodeData](CrossfaderNodeData).            |
| CrossfaderNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CrossfaderNodeData](CrossfaderNodeData). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| in1     | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| in2     | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| ctrl    | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out     | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| plugin1 | [SoundGraphPluginRef](SoundGraphPluginRef) |             |
| plugin2 | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CrossfaderNodeData](CrossfaderNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CrossfaderNodeData](CrossfaderNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
