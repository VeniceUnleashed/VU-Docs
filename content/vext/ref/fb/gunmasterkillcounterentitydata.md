---
title: GunMasterKillCounterEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| GunMasterKillCounterEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| GunMasterKillCounterEntityData(GunMasterKillCounterEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| GunMasterKillCounterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GunMasterKillCounterEntityData](GunMasterKillCounterEntityData).                            |
| GunMasterKillCounterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GunMasterKillCounterEntityData](GunMasterKillCounterEntityData).                    |
| GunMasterKillCounterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GunMasterKillCounterEntityData](GunMasterKillCounterEntityData).              |
| GunMasterKillCounterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GunMasterKillCounterEntityData](GunMasterKillCounterEntityData). |

## Properties

| Name          | Type                                                 | Description |
| ------------- | ---------------------------------------------------- | ----------- |
| weaponsPreset | [GunMasterWeaponsPreset](GunMasterWeaponsPreset)\[\] |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [GunMasterKillCounterEntityData](GunMasterKillCounterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GunMasterKillCounterEntityData](GunMasterKillCounterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
