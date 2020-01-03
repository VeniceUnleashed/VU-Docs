---
title: SubWorldInclusionCriterion
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SubWorldInclusionCriterion()                                                          | Create a new instance of this container type.                                                                                               |
| SubWorldInclusionCriterion(SubWorldInclusionCriterion other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SubWorldInclusionCriterion([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/). |

## Properties

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| name    | string     |             |
| options | string\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
