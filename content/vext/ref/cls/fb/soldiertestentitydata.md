---
title: SoldierTestEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SoldierTestEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SoldierTestEntityData(SoldierTestEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SoldierTestEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [SoldierTestEntityData](SoldierTestEntityData).                    |
| SoldierTestEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [SoldierTestEntityData](SoldierTestEntityData).              |
| SoldierTestEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoldierTestEntityData](SoldierTestEntityData).                            |
| SoldierTestEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierTestEntityData](SoldierTestEntityData).                    |
| SoldierTestEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierTestEntityData](SoldierTestEntityData).              |
| SoldierTestEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierTestEntityData](SoldierTestEntityData). |

## Properties

| Name                      | Type                                                 | Description |
| ------------------------- | ---------------------------------------------------- | ----------- |
| testSoldier               | [SoldierBlueprint](SoldierBlueprint)                 |             |
| template                  | [SoldierSpawnTemplateData](SoldierSpawnTemplateData) |             |
| testVehicle               | [VehicleBlueprint](VehicleBlueprint)                 |             |
| specialAnimationIndex     | number                                               |             |
| unlocksProfile            | [RawFileAsset](RawFileAsset)                         |             |
| team                      | [TeamId](TeamId)                                     |             |
| randomSeed                | number                                               |             |
| startSequence             | [MovementActionData](MovementActionData)             |             |
| startSequenceRoot         | [MovementActionRoot](MovementActionRoot)             |             |
| yawInputVal               | number                                               |             |
| cameraMovementsFilename   | string                                               |             |
| inputRecorder             | [InputRecorderData](InputRecorderData)               |             |
| throttleInputVal          | number                                               |             |
| fireInputVal              | number                                               |             |
| strafeInputVal            | number                                               |             |
| proneInputVal             | number                                               |             |
| pitchInputVal             | number                                               |             |
| rollInputVal              | number                                               |             |
| zoomInputVal              | number                                               |             |
| jumpInputVal              | number                                               |             |
| activeInputRecording      | number                                               |             |
| authoritativeAimingActive | number                                               |             |
| fireCounterMeasure        | number                                               |             |
| authoritativeYaw          | number                                               |             |
| authoritativePitch        | number                                               |             |
| runAutomatically          | bool                                                 |             |
| useUnlocksProfile         | bool                                                 |             |
| sprintInputVal            | bool                                                 |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierTestEntityData](SoldierTestEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierTestEntityData](SoldierTestEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
