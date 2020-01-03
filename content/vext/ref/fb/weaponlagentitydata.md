---
title: WeaponLagEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WeaponLagEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| WeaponLagEntityData(WeaponLagEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WeaponLagEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [WeaponLagEntityData](/vext/ref/fb/weaponlagentitydata/).                            |
| WeaponLagEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WeaponLagEntityData](/vext/ref/fb/weaponlagentitydata/).                    |
| WeaponLagEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WeaponLagEntityData](/vext/ref/fb/weaponlagentitydata/).              |
| WeaponLagEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponLagEntityData](/vext/ref/fb/weaponlagentitydata/). |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| binding | [WeaponLagBinding](/vext/ref/fb/weaponlagbinding/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponLagEntityData](/vext/ref/fb/weaponlagentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponLagEntityData](/vext/ref/fb/weaponlagentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
