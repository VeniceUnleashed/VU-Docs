---
title: SubtitleMainDataNode
---
### Base Classes

[TreeNodeBase](TreeNodeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SubtitleMainDataNode()                                                          | Create a new instance of this container type.                                                                                   |
| SubtitleMainDataNode(SubtitleMainDataNode other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SubtitleMainDataNode([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [SubtitleMainDataNode](SubtitleMainDataNode).                        |
| SubtitleMainDataNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubtitleMainDataNode](SubtitleMainDataNode). |

## Properties

| Name      | Type                                     | Description |
| --------- | ---------------------------------------- | ----------- |
| language  | [LanguageFormat](LanguageFormat)         |             |
| subtitles | [SubtitleDataNode](SubtitleDataNode)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SubtitleMainDataNode](SubtitleMainDataNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubtitleMainDataNode](SubtitleMainDataNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
