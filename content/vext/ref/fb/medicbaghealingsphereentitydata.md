---
title: MedicBagHealingSphereEntityData
---
### Base Classes

[ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MedicBagHealingSphereEntityData()                                                           | Create a new instance of this container type.                                                                                                          |
| MedicBagHealingSphereEntityData(MedicBagHealingSphereEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                               |
| MedicBagHealingSphereEntityData([ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) other)   | Upcast an instance of type [ExplosionPackEntityData](/vext/ref/fb/explosionpackentitydata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).   |
| MedicBagHealingSphereEntityData([MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) other) | Upcast an instance of type [MeshProjectileEntityData](/vext/ref/fb/meshprojectileentitydata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/). |
| MedicBagHealingSphereEntityData([ProjectileEntityData](/vext/ref/fb/projectileentitydata/) other)         | Upcast an instance of type [ProjectileEntityData](/vext/ref/fb/projectileentitydata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).         |
| MedicBagHealingSphereEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)       | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).       |
| MedicBagHealingSphereEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                     | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).                     |
| MedicBagHealingSphereEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)               | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).               |
| MedicBagHealingSphereEntityData([EntityData](/vext/ref/fb/entitydata/) other)                             | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).                             |
| MedicBagHealingSphereEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).                     |
| MedicBagHealingSphereEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).               |
| MedicBagHealingSphereEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/).  |

## Properties

| Name   | Type                                   | Description |
| ------ | -------------------------------------- | ----------- |
| healer | [HealingSphereData](/vext/ref/fb/healingspheredata/) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MedicBagHealingSphereEntityData](/vext/ref/fb/medicbaghealingsphereentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
