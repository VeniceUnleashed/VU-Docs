---
title: SubtitleMainDataNode
---
### Base Classes

[TreeNodeBase](/vext/ref/fb/treenodebase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SubtitleMainDataNode()                                                          | Create a new instance of this container type.                                                                                   |
| SubtitleMainDataNode(SubtitleMainDataNode other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SubtitleMainDataNode([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode/).                        |
| SubtitleMainDataNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode/). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| language  | [LanguageFormat](/vext/ref/fb/languageformat/)         |             |
| subtitles | [SubtitleDataNode](/vext/ref/fb/subtitledatanode/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubtitleMainDataNode](/vext/ref/fb/subtitlemaindatanode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
