---
title: EntityTransformData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EntityTransformData()                                                          | Create a new instance of this container type.                                                                                 |
| EntityTransformData(EntityTransformData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EntityTransformData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntityTransformData](EntityTransformData). |

## Properties

| Name             | Type                                                        | Description |
| ---------------- | ----------------------------------------------------------- | ----------- |
| entityTransforms | [LinearTransform](/vext/ref/cls/shr/LinearTransform)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EntityTransformData](EntityTransformData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntityTransformData](EntityTransformData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
