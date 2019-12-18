---
title: PhysicsNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| PhysicsNodeData()                                                          | Create a new instance of this container type.                                                                         |
| PhysicsNodeData(PhysicsNodeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| PhysicsNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [PhysicsNodeData](PhysicsNodeData).            |
| PhysicsNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PhysicsNodeData](PhysicsNodeData). |

## Properties

| Name             | Type                                     | Description |
| ---------------- | ---------------------------------------- | ----------- |
| distance         | [AudioGraphNodePort](AudioGraphNodePort) |             |
| velocity         | [AudioGraphNodePort](AudioGraphNodePort) |             |
| relativeVelocity | [AudioGraphNodePort](AudioGraphNodePort) |             |
| azimuth          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| elevationAngle   | [AudioGraphNodePort](AudioGraphNodePort) |             |
| entries          | [PhysicsEntry](PhysicsEntry)\[\]         |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsNodeData](PhysicsNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PhysicsNodeData](PhysicsNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
