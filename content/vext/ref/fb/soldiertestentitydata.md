---
title: SoldierTestEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SoldierTestEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| SoldierTestEntityData(SoldierTestEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SoldierTestEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/).                    |
| SoldierTestEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/).              |
| SoldierTestEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/).                            |
| SoldierTestEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/).                    |
| SoldierTestEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/).              |
| SoldierTestEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/). |

## Properties

| Name                      | Type                                                 | Description |
| ------------------------- | ---------------------------------------------------- | ----------- |
| testSoldier               | [SoldierBlueprint](/vext/ref/fb/soldierblueprint/)                 |             |
| template                  | [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata/) |             |
| testVehicle               | [VehicleBlueprint](/vext/ref/fb/vehicleblueprint/)                 |             |
| specialAnimationIndex     | number                                               |             |
| unlocksProfile            | [RawFileAsset](/vext/ref/fb/rawfileasset/)                         |             |
| team                      | [TeamId](/vext/ref/fb/teamid/)                                     |             |
| randomSeed                | number                                               |             |
| startSequence             | [MovementActionData](/vext/ref/fb/movementactiondata/)             |             |
| startSequenceRoot         | [MovementActionRoot](/vext/ref/fb/movementactionroot/)             |             |
| yawInputVal               | number                                               |             |
| cameraMovementsFilename   | string                                               |             |
| inputRecorder             | [InputRecorderData](/vext/ref/fb/inputrecorderdata/)               |             |
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
| [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierTestEntityData](/vext/ref/fb/soldiertestentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
