---
title: WeaponSpeedData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| WeaponSpeedData()                                                          | Create a new instance of this container type.                                                                         |
| WeaponSpeedData(WeaponSpeedData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| WeaponSpeedData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponSpeedData](WeaponSpeedData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| zoomOutSpeed  | number |             |
| zoomInSpeed   | number |             |
| unDeploySpeed | number |             |
| deploySpeed   | number |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponSpeedData](WeaponSpeedData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponSpeedData](WeaponSpeedData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
