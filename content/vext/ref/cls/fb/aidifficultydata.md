---
title: AIDifficultyData (Frostbite Container)
---
### Base Classes

[GameAIDifficultyData](GameAIDifficultyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| AIDifficultyData()                                                          | Create a new instance of this container type.                                                                           |
| AIDifficultyData(AIDifficultyData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| AIDifficultyData([GameAIDifficultyData](GameAIDifficultyData) other)        | Upcast an instance of type [GameAIDifficultyData](GameAIDifficultyData) to [AIDifficultyData](AIDifficultyData).        |
| AIDifficultyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AIDifficultyData](AIDifficultyData). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| name                            | string |             |
| accuracyIncreaseTimeModifier    | number |             |
| startAccuracyModifierStanding   | number |             |
| startAccuracyModifierCrouching  | number |             |
| finalAccuracyModifierStanding   | number |             |
| finalAccuracyModifierCrouching  | number |             |
| readinessReactionTimeMultiplier | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [AIDifficultyData](AIDifficultyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AIDifficultyData](AIDifficultyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
