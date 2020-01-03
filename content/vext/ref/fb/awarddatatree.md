---
title: AwardDataTree
---
### Base Classes

[AwardableTreeBase](/vext/ref/fb/awardabletreebase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AwardDataTree()                                                          | Create a new instance of this container type.                                                                     |
| AwardDataTree(AwardDataTree other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AwardDataTree([AwardableTreeBase](/vext/ref/fb/awardabletreebase/) other)              | Upcast an instance of type [AwardableTreeBase](/vext/ref/fb/awardabletreebase/) to [AwardDataTree](/vext/ref/fb/awarddatatree/).              |
| AwardDataTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [AwardDataTree](/vext/ref/fb/awarddatatree/).                                |
| AwardDataTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AwardDataTree](/vext/ref/fb/awarddatatree/).                                      |
| AwardDataTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardDataTree](/vext/ref/fb/awarddatatree/). |

## Properties

| Name           | Type                       | Description |
| -------------- | -------------------------- | ----------- |
| filteredAwards | [AwardData](/vext/ref/fb/awarddata/)\[\] |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AwardDataTree](/vext/ref/fb/awarddatatree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardDataTree](/vext/ref/fb/awarddatatree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
