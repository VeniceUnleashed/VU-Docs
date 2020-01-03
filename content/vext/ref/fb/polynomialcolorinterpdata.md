---
title: PolynomialColorInterpData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PolynomialColorInterpData()                                                          | Create a new instance of this container type.                                                                                             |
| PolynomialColorInterpData(PolynomialColorInterpData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PolynomialColorInterpData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata/).                      |
| PolynomialColorInterpData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata/).        |
| PolynomialColorInterpData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata/). |

## Properties

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| color0       | [Vec3](/vext/ref/shared/class/vec3) |             |
| color1       | [Vec3](/vext/ref/shared/class/vec3) |             |
| coefficients | [Vec4](/vext/ref/shared/class/vec4) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PolynomialColorInterpData](/vext/ref/fb/polynomialcolorinterpdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
