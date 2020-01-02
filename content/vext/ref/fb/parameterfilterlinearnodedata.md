---
title: ParameterFilterLinearNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ParameterFilterLinearNodeData()                                                          | Create a new instance of this container type.                                                                                                     |
| ParameterFilterLinearNodeData(ParameterFilterLinearNodeData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| ParameterFilterLinearNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [ParameterFilterLinearNodeData](ParameterFilterLinearNodeData).            |
| ParameterFilterLinearNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ParameterFilterLinearNodeData](ParameterFilterLinearNodeData). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| inValue      | [AudioGraphNodePort](AudioGraphNodePort) |             |
| out          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| attackSpeed  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| releaseSpeed | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ParameterFilterLinearNodeData](ParameterFilterLinearNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ParameterFilterLinearNodeData](ParameterFilterLinearNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
