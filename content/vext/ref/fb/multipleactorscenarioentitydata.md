---
title: MultipleActorScenarioEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| MultipleActorScenarioEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| MultipleActorScenarioEntityData(MultipleActorScenarioEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| MultipleActorScenarioEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata/).              |
| MultipleActorScenarioEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata/).                            |
| MultipleActorScenarioEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata/).                    |
| MultipleActorScenarioEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata/).              |
| MultipleActorScenarioEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata/). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| worldSpaceConnectTransform   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| actor5Part                   | number                                                  |             |
| scenarioAntRef               | [AntRef](/vext/ref/fb/antref/)                                        |             |
| levelChoice                  | number                                                  |             |
| scenarioChoice               | number                                                  |             |
| realm                        | [Realm](/vext/ref/fb/realm/)                                          |             |
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
| [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MultipleActorScenarioEntityData](/vext/ref/fb/multipleactorscenarioentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
