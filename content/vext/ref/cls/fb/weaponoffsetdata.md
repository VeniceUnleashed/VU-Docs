---
title: WeaponOffsetData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| WeaponOffsetData()                                                          | Create a new instance of this container type.                                                                           |
| WeaponOffsetData(WeaponOffsetData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| WeaponOffsetData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponOffsetData](WeaponOffsetData). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| weaponOffsetX       | number |             |
| weaponOffsetY       | number |             |
| weaponOffsetZ       | number |             |
| weaponZoomedOffsetX | number |             |
| weaponZoomedOffsetY | number |             |
| weaponZoomedOffsetZ | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponOffsetData](WeaponOffsetData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponOffsetData](WeaponOffsetData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
