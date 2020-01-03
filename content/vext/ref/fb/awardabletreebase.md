---
title: AwardableTreeBase
---
### Base Classes

[TreeBase](/vext/ref/fb/treebase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AwardableTreeBase()                                                          | Create a new instance of this container type.                                                                             |
| AwardableTreeBase(AwardableTreeBase other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AwardableTreeBase([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [AwardableTreeBase](/vext/ref/fb/awardabletreebase/).                                |
| AwardableTreeBase([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AwardableTreeBase](/vext/ref/fb/awardabletreebase/).                                      |
| AwardableTreeBase([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardableTreeBase](/vext/ref/fb/awardabletreebase/). |

## Properties

| Name                       | Type                                                     | Description |
| -------------------------- | -------------------------------------------------------- | ----------- |
| statCategoryTreeCollection | [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection/) |             |
| generalCriteria            | [CriteriaData](/vext/ref/fb/criteriadata/)\[\]                         |             |
| generalStatistics          | bool                                                     |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AwardableTreeBase](/vext/ref/fb/awardabletreebase/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardableTreeBase](/vext/ref/fb/awardabletreebase/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
