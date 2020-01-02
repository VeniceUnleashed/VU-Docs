---
title: IrReverbControllerNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| IrReverbControllerNodeData()                                                          | Create a new instance of this container type.                                                                                               |
| IrReverbControllerNodeData(IrReverbControllerNodeData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| IrReverbControllerNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [IrReverbControllerNodeData](IrReverbControllerNodeData).            |
| IrReverbControllerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IrReverbControllerNodeData](IrReverbControllerNodeData). |

## Properties

| Name       | Type                                     | Description |
| ---------- | ---------------------------------------- | ----------- |
| reverb0    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| amplitude0 | [AudioGraphNodePort](AudioGraphNodePort) |             |
| reverb1    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| amplitude1 | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [IrReverbControllerNodeData](IrReverbControllerNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [IrReverbControllerNodeData](IrReverbControllerNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
