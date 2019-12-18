---
title: IrReverbNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| IrReverbNodeData()                                                          | Create a new instance of this container type.                                                                           |
| IrReverbNodeData(IrReverbNodeData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| IrReverbNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [IrReverbNodeData](IrReverbNodeData).            |
| IrReverbNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [IrReverbNodeData](IrReverbNodeData). |

## Properties

| Name            | Type                                       | Description |
| --------------- | ------------------------------------------ | ----------- |
| inValue         | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out             | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| reverb0         | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| amplitude0      | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| reverb1         | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| amplitude1      | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| maxReverbLength | number                                     |             |
| reverbPlugin    | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [IrReverbNodeData](IrReverbNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [IrReverbNodeData](IrReverbNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
