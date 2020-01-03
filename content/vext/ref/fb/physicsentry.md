---
title: PhysicsEntry
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| PhysicsEntry()                                                          | Create a new instance of this container type.                                                                   |
| PhysicsEntry(PhysicsEntry other)                                        | Create a reference copy of an instance of the same type.                                                        |
| PhysicsEntry([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [PhysicsEntry](/vext/ref/fb/physicsentry/).  |
| PhysicsEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsEntry](/vext/ref/fb/physicsentry/). |

## Properties

| Name           | Type                                     | Description |
| -------------- | ---------------------------------------- | ----------- |
| distance       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| azimuth        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| elevationAngle | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| output         | [OutputNodeData](/vext/ref/fb/outputnodedata/)         |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsEntry](/vext/ref/fb/physicsentry/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsEntry](/vext/ref/fb/physicsentry/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
