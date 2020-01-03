---
title: WeaponOffsetData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| WeaponOffsetData()                                                          | Create a new instance of this container type.                                                                           |
| WeaponOffsetData(WeaponOffsetData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| WeaponOffsetData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponOffsetData](/vext/ref/fb/weaponoffsetdata/). |

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
| [WeaponOffsetData](/vext/ref/fb/weaponoffsetdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponOffsetData](/vext/ref/fb/weaponoffsetdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
