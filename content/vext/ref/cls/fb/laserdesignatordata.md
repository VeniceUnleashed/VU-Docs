---
title: LaserDesignatorData (Frostbite Container)
---
### Base Classes

[LockingWeaponData](LockingWeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| LaserDesignatorData()                                                          | Create a new instance of this container type.                                                                                 |
| LaserDesignatorData(LaserDesignatorData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| LaserDesignatorData([LockingWeaponData](LockingWeaponData) other)              | Upcast an instance of type [LockingWeaponData](LockingWeaponData) to [LaserDesignatorData](LaserDesignatorData).              |
| LaserDesignatorData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [LaserDesignatorData](LaserDesignatorData).                            |
| LaserDesignatorData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [LaserDesignatorData](LaserDesignatorData).                                |
| LaserDesignatorData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LaserDesignatorData](LaserDesignatorData). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| postLockTime | number                   |             |
| bomberTime   | number                   |             |
| bombWarnTime | number                   |             |
| bomberSound  | [SoundAsset](SoundAsset) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [LaserDesignatorData](LaserDesignatorData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LaserDesignatorData](LaserDesignatorData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
