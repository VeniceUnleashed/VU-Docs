---
title: SurroundingGeometryEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| SurroundingGeometryEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| SurroundingGeometryEntityData(SurroundingGeometryEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| SurroundingGeometryEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/).                    |
| SurroundingGeometryEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/).              |
| SurroundingGeometryEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/).                            |
| SurroundingGeometryEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/).                    |
| SurroundingGeometryEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/).              |
| SurroundingGeometryEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/). |

## Properties

| Name               | Type                                                       | Description |
| ------------------ | ---------------------------------------------------------- | ----------- |
| allowedVehicleList | [AllowedVehiclesData](/vext/ref/fb/allowedvehiclesdata/)                 |             |
| combatArea         | [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/) |             |
| combatAreaIndex    | number                                                     |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
