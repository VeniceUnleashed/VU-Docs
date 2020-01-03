---
title: OrientationNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| OrientationNodeData()                                                          | Create a new instance of this container type.                                                                                 |
| OrientationNodeData(OrientationNodeData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| OrientationNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [OrientationNodeData](/vext/ref/fb/orientationnodedata/).            |
| OrientationNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OrientationNodeData](/vext/ref/fb/orientationnodedata/). |

## Properties

| Name                  | Type                                     | Description |
| --------------------- | ---------------------------------------- | ----------- |
| listenerRelativeYaw   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| listenerRelativePitch | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| listenerRelativeRoll  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [OrientationNodeData](/vext/ref/fb/orientationnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OrientationNodeData](/vext/ref/fb/orientationnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
