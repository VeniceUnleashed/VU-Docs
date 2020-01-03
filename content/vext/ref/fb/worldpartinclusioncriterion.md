---
title: WorldPartInclusionCriterion
---
### Base Classes

[SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| WorldPartInclusionCriterion()                                                               | Create a new instance of this container type.                                                                                                      |
| WorldPartInclusionCriterion(WorldPartInclusionCriterion other)                              | Create a reference copy of an instance of the same type.                                                                                           |
| WorldPartInclusionCriterion([SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/) other) | Upcast an instance of type [SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/) to [WorldPartInclusionCriterion](/vext/ref/fb/worldpartinclusioncriterion/). |
| WorldPartInclusionCriterion([DataContainer](/vext/ref/shared/class/datacontainer) other)      | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartInclusionCriterion](/vext/ref/fb/worldpartinclusioncriterion/).      |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WorldPartInclusionCriterion](/vext/ref/fb/worldpartinclusioncriterion/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartInclusionCriterion](/vext/ref/fb/worldpartinclusioncriterion/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
