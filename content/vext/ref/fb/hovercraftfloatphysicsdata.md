---
title: HovercraftFloatPhysicsData
---
### Base Classes

[HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| HovercraftFloatPhysicsData()                                                          | Create a new instance of this container type.                                                                                               |
| HovercraftFloatPhysicsData(HovercraftFloatPhysicsData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| HovercraftFloatPhysicsData([HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata/) other)        | Upcast an instance of type [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata/) to [HovercraftFloatPhysicsData](/vext/ref/fb/hovercraftfloatphysicsdata/).        |
| HovercraftFloatPhysicsData([FloatPhysicsData](/vext/ref/fb/floatphysicsdata/) other)                | Upcast an instance of type [FloatPhysicsData](/vext/ref/fb/floatphysicsdata/) to [HovercraftFloatPhysicsData](/vext/ref/fb/hovercraftfloatphysicsdata/).                |
| HovercraftFloatPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HovercraftFloatPhysicsData](/vext/ref/fb/hovercraftfloatphysicsdata/). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| landResistanceAxisMod | [Vec3](/vext/ref/shared/class/vec3) |             |
| landFrictionAxisMod   | [Vec3](/vext/ref/shared/class/vec3) |             |
| frontLength           | number                            |             |
| sideLength            | number                            |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [HovercraftFloatPhysicsData](/vext/ref/fb/hovercraftfloatphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HovercraftFloatPhysicsData](/vext/ref/fb/hovercraftfloatphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
