---
title: ParameterFilterLpNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ParameterFilterLpNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| ParameterFilterLpNodeData(ParameterFilterLpNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| ParameterFilterLpNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [ParameterFilterLpNodeData](ParameterFilterLpNodeData).            |
| ParameterFilterLpNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ParameterFilterLpNodeData](ParameterFilterLpNodeData). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| inValue | [AudioGraphNodePort](AudioGraphNodePort) |             |
| out     | [AudioGraphNodePort](AudioGraphNodePort) |             |
| hz      | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ParameterFilterLpNodeData](ParameterFilterLpNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ParameterFilterLpNodeData](ParameterFilterLpNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
