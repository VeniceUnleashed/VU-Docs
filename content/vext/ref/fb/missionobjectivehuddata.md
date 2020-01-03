---
title: MissionObjectiveHudData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| MissionObjectiveHudData()                                                          | Create a new instance of this container type.                                                                                         |
| MissionObjectiveHudData(MissionObjectiveHudData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| MissionObjectiveHudData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MissionObjectiveHudData](MissionObjectiveHudData). |

## Properties

| Name                 | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| cameraPosition       | [Vec3](/vext/ref/shared/class/vec3) |             |
| horizontalBoundaries | [Vec2](/vext/ref/shared/class/vec2) |             |
| verticalBoundaries   | [Vec2](/vext/ref/shared/class/vec2) |             |
| cameraRotation       | number                            |             |
| cameraFov            | number                            |             |
| cameraLookDistance   | number                            |             |
| cameraDistance       | number                            |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MissionObjectiveHudData](MissionObjectiveHudData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MissionObjectiveHudData](MissionObjectiveHudData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
