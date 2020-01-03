---
title: ArmamentData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ArmamentData()                                                          | Create a new instance of this container type.                                                                   |
| ArmamentData(ArmamentData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| ArmamentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ArmamentData](/vext/ref/fb/armamentdata/). |

## Properties

| Name           | Type                     | Description |
| -------------- | ------------------------ | ----------- |
| threatLength   | number                   |             |
| turretData     | [TurretData](/vext/ref/fb/turretdata/) |             |
| isAntiAircraft | bool                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [ArmamentData](/vext/ref/fb/armamentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ArmamentData](/vext/ref/fb/armamentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
