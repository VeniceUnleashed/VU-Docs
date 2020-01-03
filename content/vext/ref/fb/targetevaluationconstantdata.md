---
title: TargetEvaluationConstantData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| TargetEvaluationConstantData()                                                          | Create a new instance of this container type.                                                                                                   |
| TargetEvaluationConstantData(TargetEvaluationConstantData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| TargetEvaluationConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TargetEvaluationConstantData](TargetEvaluationConstantData).                                      |
| TargetEvaluationConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TargetEvaluationConstantData](TargetEvaluationConstantData). |

## Properties

| Name                          | Type   | Description |
| ----------------------------- | ------ | ----------- |
| maxBattleStrength             | number |             |
| defaultHumanTargetPreference  | number |             |
| otherSquadAttackerFactorUsage | number |             |
| targetFlipFactorUsage         | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TargetEvaluationConstantData](TargetEvaluationConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TargetEvaluationConstantData](TargetEvaluationConstantData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
