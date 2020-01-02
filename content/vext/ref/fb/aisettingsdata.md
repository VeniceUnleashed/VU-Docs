---
title: AISettingsData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| AISettingsData()                                                          | Create a new instance of this container type.                                                                       |
| AISettingsData(AISettingsData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| AISettingsData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AISettingsData](AISettingsData).                                      |
| AISettingsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AISettingsData](AISettingsData). |

## Properties

| Name                        | Type                                                             | Description |
| --------------------------- | ---------------------------------------------------------------- | ----------- |
| soundEnvironmentConstants   | [SoundEnvironmentConstantData](SoundEnvironmentConstantData)     |             |
| coverConstants              | [CoverConstantData](CoverConstantData)                           |             |
| decisionConstants           | [DecisionConstantData](DecisionConstantData)                     |             |
| positionEvaluationConstants | [PositionEvaluationConstantData](PositionEvaluationConstantData) |             |
| timingConstants             | [TimingConstantData](TimingConstantData)                         |             |
| debugConstants              | [DebugConstantData](DebugConstantData)                           |             |
| readinessLevels             | [ReadinessLevels](ReadinessLevels)                               |             |
| defaultBehaviourTemplate    | [BehaviourTemplateData](BehaviourTemplateData)                   |             |
| defaultVehicleType          | [AIVehicleBehaviourData](AIVehicleBehaviourData)                 |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [AISettingsData](AISettingsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AISettingsData](AISettingsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
