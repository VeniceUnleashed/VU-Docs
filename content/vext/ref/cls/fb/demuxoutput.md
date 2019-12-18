---
title: DeMuxOutput (Frostbite Container)
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DeMuxOutput()                                                          | Create a new instance of this container type.                                                                 |
| DeMuxOutput(DeMuxOutput other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DeMuxOutput([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [DeMuxOutput](DeMuxOutput).  |
| DeMuxOutput([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DeMuxOutput](DeMuxOutput). |

## Properties

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| trigger | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DeMuxOutput](DeMuxOutput) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DeMuxOutput](DeMuxOutput) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
