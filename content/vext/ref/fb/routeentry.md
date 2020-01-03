---
title: RouteEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| RouteEntry()                                                          | Create a new instance of this container type.                                                               |
| RouteEntry(RouteEntry other)                                          | Create a reference copy of an instance of the same type.                                                    |
| RouteEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [RouteEntry](/vext/ref/fb/routeentry/).  |
| RouteEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RouteEntry](/vext/ref/fb/routeentry/). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| output    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| amplitude | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| plugin    | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [RouteEntry](/vext/ref/fb/routeentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RouteEntry](/vext/ref/fb/routeentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
