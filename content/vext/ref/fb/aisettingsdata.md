---
title: AISettingsData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| AISettingsData()                                                          | Create a new instance of this container type.                                                                       |
| AISettingsData(AISettingsData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| AISettingsData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AISettingsData](/vext/ref/fb/aisettingsdata/).                                      |
| AISettingsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AISettingsData](/vext/ref/fb/aisettingsdata/). |

## Properties

| Name                        | Type                                                             | Description |
| --------------------------- | ---------------------------------------------------------------- | ----------- |
| soundEnvironmentConstants   | [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata/)     |             |
| coverConstants              | [CoverConstantData](/vext/ref/fb/coverconstantdata/)                           |             |
| decisionConstants           | [DecisionConstantData](/vext/ref/fb/decisionconstantdata/)                     |             |
| positionEvaluationConstants | [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata/) |             |
| timingConstants             | [TimingConstantData](/vext/ref/fb/timingconstantdata/)                         |             |
| debugConstants              | [DebugConstantData](/vext/ref/fb/debugconstantdata/)                           |             |
| readinessLevels             | [ReadinessLevels](/vext/ref/fb/readinesslevels/)                               |             |
| defaultBehaviourTemplate    | [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata/)                   |             |
| defaultVehicleType          | [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata/)                 |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [AISettingsData](/vext/ref/fb/aisettingsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AISettingsData](/vext/ref/fb/aisettingsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
