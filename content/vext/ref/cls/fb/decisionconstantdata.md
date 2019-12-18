---
title: DecisionConstantData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DecisionConstantData()                                                          | Create a new instance of this container type.                                                                                   |
| DecisionConstantData(DecisionConstantData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| DecisionConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DecisionConstantData](DecisionConstantData).                                      |
| DecisionConstantData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DecisionConstantData](DecisionConstantData). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| newEnemyDecideMaxDistance      | number |             |
| allowEmergencyGoalInterrupt    | bool   |             |
| allowUninterruptibleBehaviours | bool   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [DecisionConstantData](DecisionConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DecisionConstantData](DecisionConstantData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
