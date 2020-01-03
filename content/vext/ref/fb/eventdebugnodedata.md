---
title: EventDebugNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EventDebugNodeData()                                                          | Create a new instance of this container type.                                                                               |
| EventDebugNodeData(EventDebugNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EventDebugNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata/).            |
| EventDebugNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata/). |

## Properties

| Name   | Type                                   | Description |
| ------ | -------------------------------------- | ----------- |
| events | [DebugEventInput](/vext/ref/fb/debugeventinput/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
