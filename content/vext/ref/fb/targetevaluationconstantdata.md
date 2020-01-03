---
title: TargetEvaluationConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| TargetEvaluationConstantData()                                                          | Create a new instance of this container type.                                                                                                   |
| TargetEvaluationConstantData(TargetEvaluationConstantData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| TargetEvaluationConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata/).                                      |
| TargetEvaluationConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata/). |

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
| [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
