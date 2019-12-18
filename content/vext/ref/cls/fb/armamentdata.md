---
title: ArmamentData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ArmamentData()                                                          | Create a new instance of this container type.                                                                   |
| ArmamentData(ArmamentData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| ArmamentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ArmamentData](ArmamentData). |

## Properties

| Name           | Type                     | Description |
| -------------- | ------------------------ | ----------- |
| threatLength   | number                   |             |
| turretData     | [TurretData](TurretData) |             |
| isAntiAircraft | bool                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [ArmamentData](ArmamentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ArmamentData](ArmamentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
