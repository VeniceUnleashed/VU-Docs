---
title: WorldPartInclusionCriterion
---
### Base Classes

[SubWorldInclusionCriterion](SubWorldInclusionCriterion)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| WorldPartInclusionCriterion()                                                               | Create a new instance of this container type.                                                                                                      |
| WorldPartInclusionCriterion(WorldPartInclusionCriterion other)                              | Create a reference copy of an instance of the same type.                                                                                           |
| WorldPartInclusionCriterion([SubWorldInclusionCriterion](SubWorldInclusionCriterion) other) | Upcast an instance of type [SubWorldInclusionCriterion](SubWorldInclusionCriterion) to [WorldPartInclusionCriterion](WorldPartInclusionCriterion). |
| WorldPartInclusionCriterion([DataContainer](/vext/ref/shared/class/datacontainer) other)      | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartInclusionCriterion](WorldPartInclusionCriterion).      |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WorldPartInclusionCriterion](WorldPartInclusionCriterion) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartInclusionCriterion](WorldPartInclusionCriterion) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
