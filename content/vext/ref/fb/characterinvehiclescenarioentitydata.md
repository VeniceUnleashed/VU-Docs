---
title: CharacterInVehicleScenarioEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterInVehicleScenarioEntityData()                                                          | Create a new instance of this container type.                                                                                                                   |
| CharacterInVehicleScenarioEntityData(CharacterInVehicleScenarioEntityData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| CharacterInVehicleScenarioEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData).                    |
| CharacterInVehicleScenarioEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData).              |
| CharacterInVehicleScenarioEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData).                            |
| CharacterInVehicleScenarioEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData).                    |
| CharacterInVehicleScenarioEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData).              |
| CharacterInVehicleScenarioEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData). |

## Properties

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| realm          | [Realm](Realm)   |             |
| scenarioAntRef | [AntRef](AntRef) |             |
| levelId        | number           |             |
| scenarioId     | number           |             |
| actorId        | number           |             |
| partId         | number           |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterInVehicleScenarioEntityData](CharacterInVehicleScenarioEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
