---
title: MedicBagEntityData
---
### Base Classes

[ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                  |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| MedicBagEntityData()                                                           | Create a new instance of this container type.                                                                                |
| MedicBagEntityData(MedicBagEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                     |
| MedicBagEntityData([ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) other)   | Upcast an instance of type [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).   |
| MedicBagEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/). |
| MedicBagEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).         |
| MedicBagEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).       |
| MedicBagEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).                     |
| MedicBagEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).               |
| MedicBagEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).                             |
| MedicBagEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).                     |
| MedicBagEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).               |
| MedicBagEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/).  |

## Properties

| Name   | Type                     | Description |
| ------ | ------------------------ | ----------- |
| healer | [HealerData](/vext/ref/fb/healerdata/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MedicBagEntityData](/vext/ref/fb/medicbagentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
