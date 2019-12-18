---
title: EngineConfigData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| EngineConfigData()                                                          | Create a new instance of this container type.                                                                           |
| EngineConfigData(EngineConfigData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| EngineConfigData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EngineConfigData](EngineConfigData). |

## Properties

| Name                         | Type                              | Description |
| ---------------------------- | --------------------------------- | ----------- |
| position                     | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| rpmCurvePoints               | number\[\]                        |             |
| torqueCurvePoints            | number\[\]                        |             |
| rpmMin                       | number                            |             |
| rpmMax                       | number                            |             |
| rpmCut                       | number                            |             |
| enginePowerMultiplier        | number                            |             |
| internalAccelerationFactor   | number                            |             |
| internalDeaccelerationFactor | number                            |             |
| boost                        | [Boost](Boost)                    |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [EngineConfigData](EngineConfigData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EngineConfigData](EngineConfigData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
