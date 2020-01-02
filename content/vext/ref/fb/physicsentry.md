---
title: PhysicsEntry
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| PhysicsEntry()                                                          | Create a new instance of this container type.                                                                   |
| PhysicsEntry(PhysicsEntry other)                                        | Create a reference copy of an instance of the same type.                                                        |
| PhysicsEntry([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [PhysicsEntry](PhysicsEntry).  |
| PhysicsEntry([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsEntry](PhysicsEntry). |

## Properties

| Name           | Type                                     | Description |
| -------------- | ---------------------------------------- | ----------- |
| distance       | [AudioGraphNodePort](AudioGraphNodePort) |             |
| azimuth        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| elevationAngle | [AudioGraphNodePort](AudioGraphNodePort) |             |
| output         | [OutputNodeData](OutputNodeData)         |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsEntry](PhysicsEntry) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsEntry](PhysicsEntry) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
