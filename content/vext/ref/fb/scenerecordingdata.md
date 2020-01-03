---
title: SceneRecordingData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SceneRecordingData()                                                          | Create a new instance of this container type.                                                                               |
| SceneRecordingData(SceneRecordingData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SceneRecordingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SceneRecordingData](/vext/ref/fb/scenerecordingdata/). |

## Properties

| Name | Type                                           | Description |
| ---- | ---------------------------------------------- | ----------- |
| data | [EntityRecordingData](/vext/ref/fb/entityrecordingdata/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SceneRecordingData](/vext/ref/fb/scenerecordingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SceneRecordingData](/vext/ref/fb/scenerecordingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
