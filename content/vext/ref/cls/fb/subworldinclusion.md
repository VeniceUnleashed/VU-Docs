---
title: SubWorldInclusion (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SubWorldInclusion()                                                          | Create a new instance of this container type.                                                                             |
| SubWorldInclusion(SubWorldInclusion other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SubWorldInclusion([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SubWorldInclusion](SubWorldInclusion).                                      |
| SubWorldInclusion([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SubWorldInclusion](SubWorldInclusion). |

## Properties

| Name     | Type                                                         | Description |
| -------- | ------------------------------------------------------------ | ----------- |
| criteria | [SubWorldInclusionCriterion](SubWorldInclusionCriterion)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SubWorldInclusion](SubWorldInclusion) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SubWorldInclusion](SubWorldInclusion) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
