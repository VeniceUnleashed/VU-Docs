---
title: PolynomialColorInterpData (Frostbite Container)
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PolynomialColorInterpData()                                                          | Create a new instance of this container type.                                                                                             |
| PolynomialColorInterpData(PolynomialColorInterpData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PolynomialColorInterpData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [PolynomialColorInterpData](PolynomialColorInterpData).                      |
| PolynomialColorInterpData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [PolynomialColorInterpData](PolynomialColorInterpData).        |
| PolynomialColorInterpData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PolynomialColorInterpData](PolynomialColorInterpData). |

## Properties

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| color0       | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| color1       | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| coefficients | [Vec4](/vext/ref/cls/shr/Vec4) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PolynomialColorInterpData](PolynomialColorInterpData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PolynomialColorInterpData](PolynomialColorInterpData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
