---
title: PolynomialData (Frostbite Container)
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| PolynomialData()                                                          | Create a new instance of this container type.                                                                       |
| PolynomialData(PolynomialData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| PolynomialData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [PolynomialData](PolynomialData).                      |
| PolynomialData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [PolynomialData](PolynomialData).        |
| PolynomialData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PolynomialData](PolynomialData). |

## Properties

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| coefficients | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| scaleValue   | number                            |             |
| minClamp     | number                            |             |
| maxClamp     | number                            |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [PolynomialData](PolynomialData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PolynomialData](PolynomialData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
