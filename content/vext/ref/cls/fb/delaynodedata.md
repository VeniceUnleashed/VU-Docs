---
title: DelayNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| DelayNodeData()                                                          | Create a new instance of this container type.                                                                     |
| DelayNodeData(DelayNodeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| DelayNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [DelayNodeData](DelayNodeData).            |
| DelayNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DelayNodeData](DelayNodeData). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| inValue      | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| delayTime    | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| feedback     | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out          | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| maxDelayTime | number                                     |             |
| plugin       | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [DelayNodeData](DelayNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DelayNodeData](DelayNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
