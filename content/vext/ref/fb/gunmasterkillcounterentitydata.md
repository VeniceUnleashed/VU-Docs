---
title: GunMasterKillCounterEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| GunMasterKillCounterEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| GunMasterKillCounterEntityData(GunMasterKillCounterEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| GunMasterKillCounterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [GunMasterKillCounterEntityData](/vext/ref/fb/gunmasterkillcounterentitydata/).                            |
| GunMasterKillCounterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GunMasterKillCounterEntityData](/vext/ref/fb/gunmasterkillcounterentitydata/).                    |
| GunMasterKillCounterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GunMasterKillCounterEntityData](/vext/ref/fb/gunmasterkillcounterentitydata/).              |
| GunMasterKillCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GunMasterKillCounterEntityData](/vext/ref/fb/gunmasterkillcounterentitydata/). |

## Properties

| Name          | Type                                                 | Description |
| ------------- | ---------------------------------------------------- | ----------- |
| weaponsPreset | [GunMasterWeaponsPreset](/vext/ref/fb/gunmasterweaponspreset/)\[\] |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [GunMasterKillCounterEntityData](/vext/ref/fb/gunmasterkillcounterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GunMasterKillCounterEntityData](/vext/ref/fb/gunmasterkillcounterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
