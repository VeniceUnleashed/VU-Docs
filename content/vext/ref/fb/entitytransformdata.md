---
title: EntityTransformData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EntityTransformData()                                                          | Create a new instance of this container type.                                                                                 |
| EntityTransformData(EntityTransformData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EntityTransformData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityTransformData](EntityTransformData). |

## Properties

| Name             | Type                                                        | Description |
| ---------------- | ----------------------------------------------------------- | ----------- |
| entityTransforms | [LinearTransform](/vext/ref/shared/class/LinearTransform)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EntityTransformData](EntityTransformData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntityTransformData](EntityTransformData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
