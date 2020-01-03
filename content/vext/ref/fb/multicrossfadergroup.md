---
title: MultiCrossfaderGroup
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| MultiCrossfaderGroup()                                                          | Create a new instance of this container type.                                                                                   |
| MultiCrossfaderGroup(MultiCrossfaderGroup other)                                | Create a reference copy of an instance of the same type.                                                                        |
| MultiCrossfaderGroup([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup/).  |
| MultiCrossfaderGroup([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup/). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| amplitude     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| start         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| stop          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| fadeAmplitude | number                                   |             |
| fadeBegin     | number                                   |             |
| fadeEnd       | number                                   |             |
| fadeType      | [FaderType](/vext/ref/fb/fadertype/)                   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
