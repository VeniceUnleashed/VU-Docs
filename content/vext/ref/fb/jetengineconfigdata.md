---
title: JetEngineConfigData
---
### Base Classes

[EngineConfigData](/vext/ref/fb/engineconfigdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| JetEngineConfigData()                                                          | Create a new instance of this container type.                                                                                 |
| JetEngineConfigData(JetEngineConfigData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| JetEngineConfigData([EngineConfigData](/vext/ref/fb/engineconfigdata/) other)                | Upcast an instance of type [EngineConfigData](/vext/ref/fb/engineconfigdata/) to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata/).                |
| JetEngineConfigData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata/). |

## Properties

| Name                      | Type                              | Description |
| ------------------------- | --------------------------------- | ----------- |
| powerFadeOutRange         | [Vec2](/vext/ref/shared/class/vec2) |             |
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
| [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
