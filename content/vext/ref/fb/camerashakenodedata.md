---
title: CameraShakeNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| CameraShakeNodeData()                                                          | Create a new instance of this container type.                                                                                 |
| CameraShakeNodeData(CameraShakeNodeData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| CameraShakeNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata/).            |
| CameraShakeNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata/). |

## Properties

| Name  | Type                                     | Description |
| ----- | ---------------------------------------- | ----------- |
| pitch | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| yaw   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| roll  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
