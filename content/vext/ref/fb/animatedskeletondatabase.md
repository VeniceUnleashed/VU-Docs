---
title: AnimatedSkeletonDatabase
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedSkeletonDatabase()                                                          | Create a new instance of this container type.                                                                                           |
| AnimatedSkeletonDatabase(AnimatedSkeletonDatabase other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AnimatedSkeletonDatabase([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedSkeletonDatabase](AnimatedSkeletonDatabase). |

## Properties

| Name     | Type                                                             | Description |
| -------- | ---------------------------------------------------------------- | ----------- |
| ragdolls | [RagdollAsset](RagdollAsset)\[\]                                 |             |
| items    | [AnimatedSkeletonDatabaseItem](AnimatedSkeletonDatabaseItem)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedSkeletonDatabase](AnimatedSkeletonDatabase) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedSkeletonDatabase](AnimatedSkeletonDatabase) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
