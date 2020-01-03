---
title: InputCurveData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| InputCurveData()                                                          | Create a new instance of this container type.                                                                       |
| InputCurveData(InputCurveData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| InputCurveData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputCurveData](InputCurveData). |

## Properties

| Name                         | Type                                             | Description |
| ---------------------------- | ------------------------------------------------ | ----------- |
| affectedInputs               | [EntryInputActionEnum](EntryInputActionEnum)\[\] |             |
| inputModifierCurve           | [Vec2](/vext/ref/shared/class/Vec2)\[\]            |             |
| handleMultipleInputsAsSquare | bool                                             |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [InputCurveData](InputCurveData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputCurveData](InputCurveData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
