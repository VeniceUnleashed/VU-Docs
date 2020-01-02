---
title: WeaponOverrideData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WeaponOverrideData()                                                          | Create a new instance of this container type.                                                                               |
| WeaponOverrideData(WeaponOverrideData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WeaponOverrideData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponOverrideData](WeaponOverrideData). |

## Properties

| Name   | Type                                                | Description |
| ------ | --------------------------------------------------- | ----------- |
| data   | [DataContainer](/vext/ref/shared/class/DataContainer) |             |
| values | [WeaponOverrideValue](WeaponOverrideValue)\[\]      |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponOverrideData](WeaponOverrideData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponOverrideData](WeaponOverrideData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
