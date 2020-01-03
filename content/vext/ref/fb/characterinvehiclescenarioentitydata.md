---
title: CharacterInVehicleScenarioEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterInVehicleScenarioEntityData()                                                          | Create a new instance of this container type.                                                                                                                   |
| CharacterInVehicleScenarioEntityData(CharacterInVehicleScenarioEntityData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| CharacterInVehicleScenarioEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/).                    |
| CharacterInVehicleScenarioEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/).              |
| CharacterInVehicleScenarioEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/).                            |
| CharacterInVehicleScenarioEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/).                    |
| CharacterInVehicleScenarioEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/).              |
| CharacterInVehicleScenarioEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/). |

## Properties

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| realm          | [Realm](/vext/ref/fb/realm/)   |             |
| scenarioAntRef | [AntRef](/vext/ref/fb/antref/) |             |
| levelId        | number           |             |
| scenarioId     | number           |             |
| actorId        | number           |             |
| partId         | number           |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterInVehicleScenarioEntityData](/vext/ref/fb/characterinvehiclescenarioentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
