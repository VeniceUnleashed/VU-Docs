---
title: JetEngineConfigData (Frostbite Container)
---
### Base Classes

[EngineConfigData](EngineConfigData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| JetEngineConfigData()                                                          | Create a new instance of this container type.                                                                                 |
| JetEngineConfigData(JetEngineConfigData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| JetEngineConfigData([EngineConfigData](EngineConfigData) other)                | Upcast an instance of type [EngineConfigData](EngineConfigData) to [JetEngineConfigData](JetEngineConfigData).                |
| JetEngineConfigData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [JetEngineConfigData](JetEngineConfigData). |

## Properties

| Name                      | Type                              | Description |
| ------------------------- | --------------------------------- | ----------- |
| powerFadeOutRange         | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| forceMagnitudeMultiplier  | number                            |             |
| angleInputYMultiplier     | number                            |             |
| angleInputPitchMultiplier | number                            |             |
| maxVelocity               | number                            |             |
| directionVectorIndex      | number                            |             |
| isWaterJetEngine          | bool                              |             |
| isTurnable                | bool                              |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [JetEngineConfigData](JetEngineConfigData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [JetEngineConfigData](JetEngineConfigData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
