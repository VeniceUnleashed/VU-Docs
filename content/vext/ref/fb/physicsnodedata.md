---
title: PhysicsNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| PhysicsNodeData()                                                          | Create a new instance of this container type.                                                                         |
| PhysicsNodeData(PhysicsNodeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| PhysicsNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [PhysicsNodeData](/vext/ref/fb/physicsnodedata/).            |
| PhysicsNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsNodeData](/vext/ref/fb/physicsnodedata/). |

## Properties

| Name             | Type                                     | Description |
| ---------------- | ---------------------------------------- | ----------- |
| distance         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| velocity         | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| relativeVelocity | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| azimuth          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| elevationAngle   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| entries          | [PhysicsEntry](/vext/ref/fb/physicsentry/)\[\]         |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsNodeData](/vext/ref/fb/physicsnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsNodeData](/vext/ref/fb/physicsnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
