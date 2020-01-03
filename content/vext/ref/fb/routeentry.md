---
title: RouteEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| RouteEntry()                                                          | Create a new instance of this container type.                                                               |
| RouteEntry(RouteEntry other)                                          | Create a reference copy of an instance of the same type.                                                    |
| RouteEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [RouteEntry](RouteEntry).  |
| RouteEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RouteEntry](RouteEntry). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| output    | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| amplitude | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| plugin    | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [RouteEntry](RouteEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RouteEntry](RouteEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
