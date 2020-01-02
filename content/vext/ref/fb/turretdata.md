---
title: TurretData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| TurretData()                                                          | Create a new instance of this container type.                                                               |
| TurretData(TurretData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| TurretData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TurretData](TurretData). |

## Properties

| Name                      | Type                                               | Description |
| ------------------------- | -------------------------------------------------- | ----------- |
| pitchP                    | number                                             |             |
| yawP                      | number                                             |             |
| fakeShootSpaceMinDistance | number                                             |             |
| fakeShootSpaceMaxDistance | number                                             |             |
| aimingConstraints         | [AIAimingConstraintsData](AIAimingConstraintsData) |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [TurretData](TurretData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TurretData](TurretData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
