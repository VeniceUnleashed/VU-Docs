---
title: DeMuxOutput
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DeMuxOutput()                                                          | Create a new instance of this container type.                                                                 |
| DeMuxOutput(DeMuxOutput other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DeMuxOutput([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [DeMuxOutput](/vext/ref/fb/demuxoutput/).  |
| DeMuxOutput([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DeMuxOutput](/vext/ref/fb/demuxoutput/). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| trigger | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DeMuxOutput](/vext/ref/fb/demuxoutput/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DeMuxOutput](/vext/ref/fb/demuxoutput/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
