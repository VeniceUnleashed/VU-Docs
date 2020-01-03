---
title: ParameterFilterLinearNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ParameterFilterLinearNodeData()                                                          | Create a new instance of this container type.                                                                                                     |
| ParameterFilterLinearNodeData(ParameterFilterLinearNodeData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| ParameterFilterLinearNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata/).            |
| ParameterFilterLinearNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata/). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| inValue      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| out          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| attackSpeed  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| releaseSpeed | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
