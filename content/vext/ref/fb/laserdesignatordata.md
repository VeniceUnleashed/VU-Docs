---
title: LaserDesignatorData
---
### Base Classes

[LockingWeaponData](/vext/ref/fb/lockingweapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| LaserDesignatorData()                                                          | Create a new instance of this container type.                                                                                 |
| LaserDesignatorData(LaserDesignatorData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| LaserDesignatorData([LockingWeaponData](/vext/ref/fb/lockingweapondata/) other)              | Upcast an instance of type [LockingWeaponData](/vext/ref/fb/lockingweapondata/) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata/).              |
| LaserDesignatorData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata/).                            |
| LaserDesignatorData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata/).                                |
| LaserDesignatorData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LaserDesignatorData](/vext/ref/fb/laserdesignatordata/). |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| postLockTime | number                   |             |
| bomberTime   | number                   |             |
| bombWarnTime | number                   |             |
| bomberSound  | [SoundAsset](/vext/ref/fb/soundasset/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [LaserDesignatorData](/vext/ref/fb/laserdesignatordata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LaserDesignatorData](/vext/ref/fb/laserdesignatordata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
