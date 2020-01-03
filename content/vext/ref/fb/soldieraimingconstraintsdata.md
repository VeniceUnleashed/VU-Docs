---
title: SoldierAimingConstraintsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierAimingConstraintsData()                                                          | Create a new instance of this container type.                                                                                                   |
| SoldierAimingConstraintsData(SoldierAimingConstraintsData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SoldierAimingConstraintsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAimingConstraintsData](/vext/ref/fb/soldieraimingconstraintsdata/). |

## Properties

| Name                | Type                                           | Description |
| ------------------- | ---------------------------------------------- | ----------- |
| swimmingConstraints | [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata/) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierAimingConstraintsData](/vext/ref/fb/soldieraimingconstraintsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierAimingConstraintsData](/vext/ref/fb/soldieraimingconstraintsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
