---
title: AimerModifierData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AimerModifierData()                                                          | Create a new instance of this container type.                                                                             |
| AimerModifierData(AimerModifierData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AimerModifierData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AimerModifierData](AimerModifierData).                                      |
| AimerModifierData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AimerModifierData](AimerModifierData). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| lookSpeedMultiplier     | number |             |
| onlyInSupportedShooting | bool   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AimerModifierData](AimerModifierData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AimerModifierData](AimerModifierData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
