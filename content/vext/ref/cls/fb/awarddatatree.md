---
title: AwardDataTree (Frostbite Container)
---
### Base Classes

[AwardableTreeBase](AwardableTreeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AwardDataTree()                                                          | Create a new instance of this container type.                                                                     |
| AwardDataTree(AwardDataTree other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AwardDataTree([AwardableTreeBase](AwardableTreeBase) other)              | Upcast an instance of type [AwardableTreeBase](AwardableTreeBase) to [AwardDataTree](AwardDataTree).              |
| AwardDataTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [AwardDataTree](AwardDataTree).                                |
| AwardDataTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AwardDataTree](AwardDataTree).                                      |
| AwardDataTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AwardDataTree](AwardDataTree). |

## Properties

| Name           | Type                       | Description |
| -------------- | -------------------------- | ----------- |
| filteredAwards | [AwardData](AwardData)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AwardDataTree](AwardDataTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AwardDataTree](AwardDataTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
