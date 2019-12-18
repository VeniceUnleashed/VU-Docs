---
title: PhysicsDebugSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsDebugSettings()                                                          | Create a new instance of this container type.                                                                                   |
| PhysicsDebugSettings(PhysicsDebugSettings other)                                | Create a reference copy of an instance of the same type.                                                                        |
| PhysicsDebugSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PhysicsDebugSettings](PhysicsDebugSettings). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| timingRecursionDepth  | number |             |
| usePhysicsCpuTimers   | bool   |             |
| debugHingeConstraints | bool   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsDebugSettings](PhysicsDebugSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PhysicsDebugSettings](PhysicsDebugSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
