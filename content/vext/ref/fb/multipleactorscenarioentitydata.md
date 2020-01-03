---
title: MultipleActorScenarioEntityData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| MultipleActorScenarioEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| MultipleActorScenarioEntityData(MultipleActorScenarioEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| MultipleActorScenarioEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MultipleActorScenarioEntityData](MultipleActorScenarioEntityData).              |
| MultipleActorScenarioEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MultipleActorScenarioEntityData](MultipleActorScenarioEntityData).                            |
| MultipleActorScenarioEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MultipleActorScenarioEntityData](MultipleActorScenarioEntityData).                    |
| MultipleActorScenarioEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MultipleActorScenarioEntityData](MultipleActorScenarioEntityData).              |
| MultipleActorScenarioEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultipleActorScenarioEntityData](MultipleActorScenarioEntityData). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| worldSpaceConnectTransform   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| actor5Part                   | number                                                  |             |
| scenarioAntRef               | [AntRef](AntRef)                                        |             |
| levelChoice                  | number                                                  |             |
| scenarioChoice               | number                                                  |             |
| realm                        | [Realm](Realm)                                          |             |
| actor6Part                   | number                                                  |             |
| actor1                       | number                                                  |             |
| actor1Part                   | number                                                  |             |
| actor1SecondPart             | number                                                  |             |
| actor2                       | number                                                  |             |
| actor2Part                   | number                                                  |             |
| actor2SecondPart             | number                                                  |             |
| actor3                       | number                                                  |             |
| actor3Part                   | number                                                  |             |
| actor3SecondPart             | number                                                  |             |
| actor4                       | number                                                  |             |
| actor4Part                   | number                                                  |             |
| actor4SecondPart             | number                                                  |             |
| actor5                       | number                                                  |             |
| actor5SecondPart             | number                                                  |             |
| actor6SecondPart             | number                                                  |             |
| actor6                       | number                                                  |             |
| externalTime                 | number                                                  |             |
| aligningEnabled              | bool                                                    |             |
| scenarioActive               | bool                                                    |             |
| actor1Prepared               | bool                                                    |             |
| actor2Prepared               | bool                                                    |             |
| actor3Prepared               | bool                                                    |             |
| actor4Prepared               | bool                                                    |             |
| actor5Prepared               | bool                                                    |             |
| actor6Prepared               | bool                                                    |             |
| checkActor1Finished          | bool                                                    |             |
| checkActor2Finished          | bool                                                    |             |
| checkActor3Finished          | bool                                                    |             |
| checkActor4Finished          | bool                                                    |             |
| checkActor5Finished          | bool                                                    |             |
| checkActor6Finished          | bool                                                    |             |
| useInputEventPlayerAsPlayer1 | bool                                                    |             |
| useExternalTime              | bool                                                    |             |
| worldSpace                   | bool                                                    |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MultipleActorScenarioEntityData](MultipleActorScenarioEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MultipleActorScenarioEntityData](MultipleActorScenarioEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
