---
title: SubtitleDataTree (Frostbite Container)
---
### Base Classes

[TreeBase](TreeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SubtitleDataTree()                                                          | Create a new instance of this container type.                                                                           |
| SubtitleDataTree(SubtitleDataTree other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SubtitleDataTree([TreeBase](TreeBase) other)                                | Upcast an instance of type [TreeBase](TreeBase) to [SubtitleDataTree](SubtitleDataTree).                                |
| SubtitleDataTree([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SubtitleDataTree](SubtitleDataTree).                                      |
| SubtitleDataTree([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SubtitleDataTree](SubtitleDataTree). |

## Properties

| Name      | Type                                             | Description |
| --------- | ------------------------------------------------ | ----------- |
| subtitles | [SubtitleMainDataNode](SubtitleMainDataNode)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SubtitleDataTree](SubtitleDataTree) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SubtitleDataTree](SubtitleDataTree) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
