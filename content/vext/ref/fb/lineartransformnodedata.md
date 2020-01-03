---
title: LinearTransformNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| LinearTransformNodeData()                                                          | Create a new instance of this container type.                                                                                         |
| LinearTransformNodeData(LinearTransformNodeData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| LinearTransformNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata/).            |
| LinearTransformNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata/). |

## Properties

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| x    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| k    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| m    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| y    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
