---
title: ScaleClampNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ScaleClampNodeData()                                                          | Create a new instance of this container type.                                                                               |
| ScaleClampNodeData(ScaleClampNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ScaleClampNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata/).            |
| ScaleClampNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata/). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| inValue | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| inMin   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| inMax   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| outMin  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| outMax  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| out     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
