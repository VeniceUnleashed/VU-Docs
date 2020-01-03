---
title: ValueDebugNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ValueDebugNodeData()                                                          | Create a new instance of this container type.                                                                               |
| ValueDebugNodeData(ValueDebugNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ValueDebugNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata/).            |
| ValueDebugNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata/). |

## Properties

| Name   | Type                                   | Description |
| ------ | -------------------------------------- | ----------- |
| values | [DebugValueInput](/vext/ref/fb/debugvalueinput/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ValueDebugNodeData](/vext/ref/fb/valuedebugnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
