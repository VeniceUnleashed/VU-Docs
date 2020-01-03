---
title: SubtitleDataTree
---
### Base Classes

[TreeBase](/vext/ref/fb/treebase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SubtitleDataTree()                                                          | Create a new instance of this container type.                                                                           |
| SubtitleDataTree(SubtitleDataTree other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SubtitleDataTree([TreeBase](/vext/ref/fb/treebase/) other)                                | Upcast an instance of type [TreeBase](/vext/ref/fb/treebase/) to [SubtitleDataTree](/vext/ref/fb/subtitledatatree/).                                |
| SubtitleDataTree([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SubtitleDataTree](/vext/ref/fb/subtitledatatree/).                                      |
| SubtitleDataTree([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubtitleDataTree](/vext/ref/fb/subtitledatatree/). |

## Properties

| Name      | Type                                             | Description |
| --------- | ------------------------------------------------ | ----------- |
| subtitles | [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SubtitleDataTree](/vext/ref/fb/subtitledatatree/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubtitleDataTree](/vext/ref/fb/subtitledatatree/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
